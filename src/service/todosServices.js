import axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:8888'
});

export const getTodos = () => instance('/get-todos');