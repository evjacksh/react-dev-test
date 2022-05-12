import React from 'react'
import TdImageCell from '../TdImageCell/TdImageCell'
import HistogramComponent from '../HistogramComponent/HistogramComponent';

const TableTrItem = ({sku_id,title,subj_name,subj_root_name,brand,price,sales_count,sales_sum,sales_data,potential,lostRevenue,period}) => {

if(sku_id || title || subj_name || subj_root_name || brand || price || sales_count || sales_sum || sales_data){
    // Category Length Formating
    let category = `${subj_root_name}/${subj_name}`
    if(category.length >= 33){
        category = 
            <span>
                {category.split('').slice(0,30).join('')}<span className='table_tr_item_title_dots_span'>...</span>
            </span>
    }

    // Title Length Formating
    const formatTitle = title.length >= 33 
    ? 
    <span>{title.split('').slice(0,30).join('')}<span className='table_tr_item_title_dots_span'>...</span></span> 
    : 
    title

    // CSS Classes
    const tdClass = 'table_tr_item'
    const tdAlignRightClass = tdClass + ' table_tr_item_align_right'

    // Adding Symbols
    const newPrice = price.toLocaleString() + ' ₽'
    const newSalesSum = sales_sum.toLocaleString() + ' ₽'

    // Elements Lists 
    const alignDefaultTdArr = [sku_id,formatTitle,category,brand]
    const alignDefaultTdList = alignDefaultTdArr.map((e,ind) => <td key={sku_id+ind} className={tdClass}>{e}</td>)

    const alignRightTdArr = [newPrice,sales_count,newSalesSum]
    const alignRightTdList = alignRightTdArr.map((e,ind) => <td key={ind+sku_id} className={tdAlignRightClass}>{e}</td>)



  return (
    <tr className='tr_content' id='tr_content'>
        <TdImageCell backgroundImage={'url(https://i.pinimg.com/originals/45/e1/8e/45e18e80460166ca700ba34ff7e72ad7.jpg)'} />
        {alignDefaultTdList}
        <td>
            <HistogramComponent salesData={sales_data} color={'#3EAC5B'} />
        </td>
        {alignRightTdList}
        <td className={tdAlignRightClass}>
            {potential.toLocaleString()} ₽
        </td>
        <td className={tdAlignRightClass}>
            {lostRevenue.toLocaleString()} ₽
        </td>
        <td className={tdAlignRightClass + ' period'}>
            {period}
        </td>
        <td>
            <HistogramComponent salesData={sales_data} color={'#FBBD07'} />
        </td>
        <td>
            <HistogramComponent salesData={sales_data} color={'#4687F4'} />
        </td>
    </tr>
  )
}
}

export default TableTrItem