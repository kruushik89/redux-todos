import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:8888'
});

export const getTodos = () => instance('/get-todos');

export const createTodos = (title, description) => instance.post('/create-todo', JSON.stringify({title, description}),
    {headers: { 'Content-Type':'application/json'}}
    );