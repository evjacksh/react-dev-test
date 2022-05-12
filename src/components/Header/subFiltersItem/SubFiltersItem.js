import React from 'react'
import './subFiltersItem.css'

const SubFiltersItem = ({value,current,id,setSubFiltersArr,subFiltersArr}) => {

    const onCurrent = (id) => {
        setSubFiltersArr(subFiltersArr.map((e,eid) => {
            if(eid === id){
                return {...e, current: true}
            } else{
                return {...e, current: false}
            }
        }))
    }

    const subFiltersItemClass = current ? 'sub_filters_item current' : 'sub_filters_item'

  return (
    <li onClick={e => onCurrent(id)} className={subFiltersItemClass}>{value}</li>
  )
}

export default SubFiltersItem