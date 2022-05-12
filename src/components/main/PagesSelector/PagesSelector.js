import React from 'react'

const PagesSelector = ({page,setPage,total}) => {

    const pageClass = 'page_selector'
    const pageArrowClass = ' page_arrow '
    const pageArrowBack = 'page_arrow_back'
  return (
    <>
      <span className={pageClass + pageArrowClass + pageArrowBack} onClick={e => setPage( page > 1 ? page - 1 : page )}></span>
      <span className={pageClass}>
        Страница {page}  из {total}
      </span>
      <span className={pageClass + pageArrowClass} onClick={e => setPage( page < total ? page + 1 : page )}>
      </span>
    </>
  )
}

export default PagesSelector