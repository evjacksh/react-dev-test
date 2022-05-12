import React, {useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = ({setLinkPeriod,endDate,setEndDate,startDate,setStartDate}) => {
  const dayInMs = (24 * 60 * 60 * 1000) 


  const [period, setPeriod] = useState(endDate - startDate)

  useEffect(() => {
    setPeriod(Math.round((endDate - startDate) / dayInMs))
  },[startDate,endDate])

  useEffect(() => {
    setLinkPeriod(period)
  },[period])


  return (
    <div className='header_filters_period_selector_block'>
      <span>Период</span>
      <div className="datepickers_container">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default DatePickers