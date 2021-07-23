import React, {useEffect} from 'react';
import {getTodos} from "../../service/todosServices";
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.todoReducer);

    const fetchTodos = async () => {
        await getTodos().then(value => dispatch({type: 'GET_TODOS', payload: value.data}))
    }

    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <div className={'todos_wrap'}>
            {todos.map(value => <TodoItem key={value.id} item={value}/>)}
        </div>
    )
}

export default Todos;