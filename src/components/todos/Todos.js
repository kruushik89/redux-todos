import React, {useEffect} from 'react';
import {changeTodoStatus, deleteTodo, getTodos} from "../../service/todosServices";
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

    const onChangeTodoStatus = async (id, completed) => {
        const data = await changeTodoStatus(id, completed).then(value => value.data);
        dispatch({type: 'STATUS_TODO', payload: data})
    }

    useEffect(() => {
        fetchTodos()
    }, [])
    return (
        <div className={'todos_wrap'}>
            {todos.map(value => <TodoItem key={value.id} item={value} onDeleteTodo={onDeleteTodo} onChangeTodoStatus={onChangeTodoStatus}/>)}
        </div>
    )
}

export default Todos;