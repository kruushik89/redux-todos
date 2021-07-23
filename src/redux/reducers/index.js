import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {formReducer} from "./formReducer";

export const reducers = combineReducers({
    formReducer,
    todoReducer
})