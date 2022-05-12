const initialState = {
    items: []
}

export const GET_DATA = 'GET_DATA'

export const reducer = (state = initialState,action) => {
    const {type,payload} = action
    switch(type){
        case GET_DATA:
            return {...state, items: [...payload]}
        default:
            return state
    }
}



