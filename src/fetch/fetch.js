const DB_URL = 'https://wb-test.website.yandexcloud.net/export.json'

export const GET_DATA = (url,datePicker = false, datesArr = []) => {
    let data = []
    fetch(url)
        .then(res => res.json())
        .then(json => data.push(...json))
        .catch(err => console.log(err))

    if(datePicker && data.length > 0){
        const [dateTo,dateFrom] = datesArr.sort((a,b) => a - b)

        data.filter(e => {
            let searchedDate = []
            for (const date of e.sales_data.date) {
                if(date >= dateFrom && date <= dateTo){
                    searchedDate.push(e)
                }
            }
            return searchedDate
        })
    } else{
        return data
    }
}

