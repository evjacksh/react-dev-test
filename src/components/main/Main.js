import React, {useState, useEffect} from 'react'

import './main.css'
import TableThItem from './TableThItem/TableThItem'
import TdInputBlock from './TdInputBlock/TdInputBlock'
import TableTrItem from './TableTrItem/TableTrItem'
import PagesSelector from './PagesSelector/PagesSelector'

export const Main = ({data}) => {
  const [page,setPage] = useState(1)
  const [currentData,setCurrentData] = useState([...data.slice(0,50)])
  const [searchData,setSearchData] = useState([])
  const [searching,setSearching] = useState(false)
  
  const [skuSearchValue,setSkuSearchValue] = useState('')
  const [nameSearchValue,setNameSearchValue] = useState('')
  const [categorySearchValue,setCategorySearchValue] = useState('')
  const [brandSearchValue,setBrandSearchValue] = useState('')
  const [priceSearchValue,setPriceSearchValue] = useState('')
  const [salesCountSearchValue,setSalesCountSearchValue] = useState('')
  const [revenueSearchValue,setRevenueSearchValue] = useState('')
  const [potentialValue,setPotentialValue] = useState('')
  const [lostRevenueValue,setLostRevenueValue] = useState('')
  const [daysValue,setDaysValue] = useState('')


  const searchFunc = () => {
    const newData = [...currentData]

    if(skuSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.sku_id).indexOf(skuSearchValue)])
      ])
      return
    } 
    if(nameSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.title).indexOf(nameSearchValue)])
      ])
      return
    }
    if(categorySearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[e.subj_name.indexOf(categorySearchValue)] || newData[e.subj_root_name.indexOf(categorySearchValue)])
      ])
      return
    }
    if(brandSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[e.brand.indexOf(brandSearchValue)])
      ])
      return
    }
    if(priceSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.price).indexOf(priceSearchValue)])
      ])
      return
    }
    if(salesCountSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.sales_count).indexOf(salesCountSearchValue)])
      ])
      return
    }
    if(revenueSearchValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.sales_sum).indexOf(revenueSearchValue)])
      ])
      return
    }
    if(potentialValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.potential).indexOf(potentialValue)])
      ])
      return
    }
    if(lostRevenueValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => newData[String(e.lostRevenue).indexOf(lostRevenueValue)])
      ])
      return
    }
    if(daysValue !== ''){
      setSearching(true)
      setSearchData([
        ...newData.filter(e => e.period === +daysValue)
      ])
      return
    }

    setSearching(false)
    setSearchData([])
  } 


  
  useEffect(() => {
    setCurrentData([
      ...data.slice(50 * page - 50, 50 * page)
    ])
    if(searchData.length > 0){
      setSearchData([
        ...searchData.slice(50 * page - 50, 50 * page)
      ])
    }
  }, [page,data])
 

  // Pages Count
  let pagesCount = Math.ceil(data.length / 50)
  let searchingPagesCount = Math.max(Math.ceil(searchData.length / 50),1)
  

  const thListArr = [
    {value:'Фото', empty: true, size: 'xs',},
    {value:'SKU', size: 'sm-md',searchValue:skuSearchValue,setSearchValue: e => setSkuSearchValue(e),searchFunc: e => searchFunc()},
    {value:'Название', size: 'lg',searchValue:nameSearchValue, setSearchValue: e => setNameSearchValue(e),searchFunc: e => searchFunc()},
    {value:'Категория', size: 'lg',searchValue:categorySearchValue,setSearchValue: e => setCategorySearchValue(e),searchFunc: e => searchFunc()},
    {value:'Бренд', size: 'sm-md',searchValue:brandSearchValue,setSearchValue: e => setBrandSearchValue(e),searchFunc: e => searchFunc()},
    {value:'График продаж', empty: true, size: 'md'},
    {value:'Цена', size: 'xs', textAlign: 'right',searchValue:priceSearchValue,setSearchValue: e => setPriceSearchValue(e),searchFunc: e => searchFunc()},
    {value:'Продаж', textAlign: 'right',searchValue:salesCountSearchValue,setSearchValue: e => setSalesCountSearchValue(e),searchFunc: e => searchFunc()},
    {value:'Выручка', textAlign: 'right',searchValue:revenueSearchValue,setSearchValue: e => setRevenueSearchValue(e),searchFunc: e => searchFunc()},
    {value:'Потенциал', size: 'sm-md', textAlign: 'right',searchValue: potentialValue, setSearchValue: e => setPotentialValue(e),searchFunc: e => searchFunc()},
    {value:'Упущенная выручка', size: 'md', textAlign: 'right',searchValue: lostRevenueValue, setSearchValue: e => setLostRevenueValue(e),searchFunc: e => searchFunc()},
    {value:'Дней ...', size: 'xs', textAlign: 'right',searchValue: daysValue, setSearchValue: e => setDaysValue(e),searchFunc: e => searchFunc()},
    {value:'Число категорий', empty: true, size: 'sm-md'},
    {value:'График остатков', empty: true, size: 'sm-md'},
  ] 

  // Lists
  const dataList = searchData.length > 0 || searching ?
  searchData.map((e,ind) => <TableTrItem key={e.sku_id+ind} {...e}/>)
  :
  currentData.map((e,ind) => <TableTrItem key={e.sku_id+ind} {...e}/>)

  const thList = thListArr.map((e,ind) => <TableThItem key={ind} {...e}/>)
  const tdInputList = thListArr.map((e,ind) => <TdInputBlock key={ind} {...e} />)

  return (
    <main>
      <table className='main_stats_table'>
        <thead>
          <tr>
            {thList}
            <th className='empty_th_item'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {tdInputList}
            <td className='empty_th_item'></td>
          </tr>
            {dataList}
        </tbody>
      </table>
      <div className="table_info">
        <div className='pages_block'>
          {
            searching ? 
            <PagesSelector total={searchingPagesCount} page={page} setPage={e => setPage(e)} />
            : 
            <PagesSelector total={pagesCount} page={page} setPage={e => setPage(e)} /> 
          }
        </div>
      </div>
    </main>
  )
}

