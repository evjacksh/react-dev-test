import React from 'react'

const TableThItem = ({size, value, textAlign}) => {
    
    let width;
    switch(size){
        case 'lg':
            width = '12%'
            break
        case 'md':
            width = '8%'
            break
        case 'sm-md':
            width = '6.7%'
            break
        case 'sm':
            width = '4%'
            break
        case 'xs':
            width = '3.5%'
            break
        default:
            width = '5%'
            break
    }

  return (
    <th className='main_table_th_item' style={{width,textAlign}} >
        {value}
    </th>
  )
}

export default TableThItem