const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.payload}
        case 'CREATE_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'DELETE_TODO':
            return {...state, todos: state.todos.filter(value => value.id !== action.payload)}
        case 'STATUS_TODO':
            const find = state.todos.find(value => value.id === action.payload.id);
            find.completed = action.payload.completed;
            return {...state}
        case 'TITLE_DESCRIPTION_TODO':
            const findTitle = state.todos.find(value => value.id === action.payload.id);
            findTitle.title = action.payload.title;
            findTitle.description = action.payload.description;
            return {...state}
        default:
            return state
    }
}