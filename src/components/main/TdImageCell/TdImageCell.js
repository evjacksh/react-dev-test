import React from 'react'

const TdImageCell = ({backgroundImage}) => {
  return (
    <td>
        <div>
            <input type="checkbox" className='td_chekbox' />
            <div className="td_image_placeholder" style={{backgroundImage}}></div>
        </div>
    </td>
  )
}

export default TdImageCell