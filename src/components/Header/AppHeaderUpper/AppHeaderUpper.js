import React, {useEffect, useState} from 'react'
import DatePickers from '../DatePickers/DatePickers'

const AppHeaderUpper = ({linkPeriod,setLinkPeriod,endDate,setEndDate,startDate,setStartDate}) => {

  const [activeCheckboxFilter,setActiveCheckboxFilter] = useState(false)
  const [textPeriod,setTextPeriod] = useState(linkPeriod)

  useEffect(() => {
    setTextPeriod(linkPeriod)
  },[linkPeriod])
  

  const filtersCheckboxBlockClass = activeCheckboxFilter ? 'header_filters_block_chekbox active' : 'header_filters_block_chekbox'
  const filtersLabelClass = activeCheckboxFilter ? 'active' : ''
  const filtersInputClass = activeCheckboxFilter ? 'active' : ''
  const filtersTextClass = activeCheckboxFilter ? 'header_filters_block_text active' : 'header_filters_block_text'

  return (
    <div className="app_header_upper">
        <div className="header_way_link">
          <div className='header_way_link_text_content'>
            <div className='header_way_link_block'>
              <span className='header_way_link_text'><a href='#'>Товары</a> / <a href='#'>Общее</a></span>
              <div className='header_way_link_arrow_block'>
                <div className='header_way_link_arrow'></div>
              </div>
            </div>
            <span className='header_way_link_period'>за {textPeriod} дней</span>
          </div>
          <p className='header_way_link_domain'>http://abc.com/catalog/abc/cba</p>
        </div>
        <div className="header_filters_block">
          <div className={filtersCheckboxBlockClass}>
            <label htmlFor="res" className={filtersLabelClass}>
            </label>
            <input type="checkbox" 
              id="res" 
              className={filtersInputClass}
              onClick={e => setActiveCheckboxFilter(!activeCheckboxFilter)}
            />
            <span className={filtersTextClass}>FBS</span>
          </div>
          <div className="header_filters_block_sorting">
            <span>Новинки:</span>
            <select name="latest" id="latest">
              <option value="latest">не важно</option>
              <option value="latest">самое новое</option>
              <option value="latest">самое старое</option>
            </select>
          </div>
          <DatePickers 
          setLinkPeriod={e => setLinkPeriod(e)} 
          endDate={endDate}
          setEndDate={e => setEndDate(e)}
          startDate={startDate}
          setStartDate={e => setStartDate(e)}
          />
        </div>
      </div>
  )
}

export default AppHeaderUpper