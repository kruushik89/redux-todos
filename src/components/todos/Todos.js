import React, {useEffect} from 'react';
import {deleteTodo, getTodos} from "../../service/todosServices";
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(state => state.todoReducer);

    const fetchTodos = async () => {
        await getTodos().then(value => dispatch({type: 'GET_TODOS', payload: value.data}))
    }

    const onDeleteTodo = async (id) => {
        deleteTodo(id).then(value => value);
        dispatch({type: 'DELETE_TODO', payload: id})
    }

    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <div className={'todos_wrap'}>
            {todos.map(value => <TodoItem key={value.id} item={value} onDeleteTodo={onDeleteTodo}/>)}
        </div>
    )
}

export default Todos;