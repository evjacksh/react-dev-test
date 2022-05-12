import React, {useEffect, useState} from 'react'
import Header  from './components/Header'
import Main from './components/main'
const data = require('./export.json')


const App = () => {
  const [linkPeriod, setLinkPeriod] = useState(30)
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date().setDate(endDate.getDate() - linkPeriod));
  const [fullData,setFullData] = useState([])

  const getFullData = () => {
    setFullData([
      ...data.map(e => {
        const {price, sales_data} = e
        
        // Get Period
          const salesDatePeriod = sales_data.filter(e => (startDate <= new Date(e.date).getTime() && new Date(e.date).getTime() <= endDate.getTime()))

          // Get and sort sales dates
            const dates = salesDatePeriod.map(e => e.date).sort((a,b) => a - b)

          // Function for sales_count and sales_sum variable
            const sumFunc = (arr) => {
              let res = 0
              for (const count of arr) {
                res += count
              }
              return res
            }
    
          // Add first and last dates to variable
          if(dates.length > 0){
            const firstDate = new Date(dates[dates.length - 1])
            const lastDate = new Date(dates[0])
            const sales_count_arr = salesDatePeriod.map(e => e.count)
            const sales_count = sumFunc(sales_count_arr)
            const sales_sum = sumFunc(sales_count_arr.map(e => e * price))
            const sales_data = salesDatePeriod

            // milliseconds to days
            let period = Math.round((lastDate - firstDate) / (1000 * 60 * 60 * 24)) 
            period = period < 1 ? 1 : period
        
            // Potential and lost revenue
            let potential
            let lostRevenue
            if(sales_count){
              if(period < 30){
                const salesPerDay = sales_count / period
                potential = Math.round(salesPerDay * 30 * price)
                lostRevenue = (potential - sales_sum)
              } else{
                  potential = sales_sum
                  lostRevenue = 0
              }
              return ({...e,potential,lostRevenue,period,sales_count,sales_sum, sales_data})
            }
          }
      }).filter(e => e !== undefined)
    ])
  }


  useEffect(() => {
    getFullData()
  },[endDate,startDate])

  return (
    <div className='App'>
      <Header 
        linkPeriod={linkPeriod} 
        setLinkPeriod={e => setLinkPeriod(e)}
        endDate={endDate}
        setEndDate={e => setEndDate(e)}
        startDate={startDate}
        setStartDate={e => setStartDate(e)}
      />
      <Main data={fullData} />
    </div>
  )
}

export default App