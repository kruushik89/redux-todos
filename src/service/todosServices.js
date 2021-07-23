import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:8888'
});

export const getTodos = () => instance('/get-todos');

export const createTodos = (title, description) => instance.post('/create-todo', JSON.stringify({title, description}),
    {headers: { 'Content-Type':'application/json'}}
    );

export const deleteTodo = (id) => instance.delete('/delete-todo/'+ id)

export const changeTodoStatus = (id, completed) => instance.patch('/update-todo/'+ id,
    JSON.stringify({completed: !completed}),
    {headers: { 'Content-Type':'application/json'}}
    )