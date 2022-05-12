import React,{ useState} from 'react'

const TdInputBlock = ({empty,size,searchValue,setSearchValue,searchFunc}) => {
    const [inputValue,setInputValue] = useState(searchValue)

    const inputClass = empty ? 'tabel_input empty_td_input' : 'tabel_input'
    let inputSizeClass;
    switch(size){
      case 'lg':
        inputSizeClass = inputClass + ' lg'
        break
      case 'md':
        inputSizeClass = inputClass + ' md'
        break
      case 'sm-md':
        inputSizeClass = inputClass + ' sm-md'
        break
      case 'sm':
        inputSizeClass = inputClass + ' sm'
        break
      default:
        inputSizeClass = inputClass
    }
  return (
    <td>
        <input type="text" 
            value={inputValue} 
            onChange={e => {
              setInputValue(e.target.value)
              setSearchValue(e.target.value)
            }}
            className={inputSizeClass}
            
        />
        {
          !empty ? <span className='td_input_span' onClick={e => {
            searchFunc()
          }}></span> : null  
        }
    </td>
  )
}

export default TdInputBlock