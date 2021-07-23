const initialState = {
    title: '',
    description: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TITLE_VALUE':
            return {...state, title: action.payload}
        case 'DESCRIPTION_VALUE':
            return {...state, description: action.payload}
        default:
            return state
    }
}