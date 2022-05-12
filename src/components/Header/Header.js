import React, { useState } from 'react'
import './header.css'
import SubFiltersItem from './subFiltersItem/SubFiltersItem'
import AppHeaderUpper from './AppHeaderUpper/AppHeaderUpper'

export const Header = ({linkPeriod,setLinkPeriod,endDate,setEndDate,startDate,setStartDate}) => {
  const [subFiltersArr,setSubFiltersArr] = useState([
    {value:'Товары',current: true},
    {value:'Подкатегории',current: false},
    {value:'Бренды',current: false},
    {value:'Продавцы',current: false},
    {value:'Тренд',current: false},
    {value:'По дням',current: false},
    {value:'Ценовая сегментация',current: false},
    {value:'Сравнение периодов',current: false}
  ]) 

const subFiltersList = subFiltersArr.map((e,id) => <SubFiltersItem 
  key={id} 
  {...e} 
  id={id} 
  setSubFiltersArr={e => setSubFiltersArr(e)}
  subFiltersArr={subFiltersArr} 
/>)

  return (
    <header className='app_header'>
      <AppHeaderUpper 
        linkPeriod={linkPeriod} 
        setLinkPeriod={e => setLinkPeriod(e)} 
        endDate={endDate}
        setEndDate={e => setEndDate(e)}
        startDate={startDate}
        setStartDate={e => setStartDate(e)}
      />
      <div className="app_header_lower">
        <ul className="header_categories_list">
          {subFiltersList}
        </ul>
      </div>
    </header>
  )
}

