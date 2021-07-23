import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createTodos} from "../../service/todosServices";

const MyForm = () => {
    const {title, description} = useSelector(state => state.formReducer);
    const dispatch = useDispatch();


    const onChangeTitle = ({target: {value}}) => dispatch({type: 'TITLE_VALUE', payload: value})
    const onChangeDescription = ({target: {value}}) => dispatch({type: 'DESCRIPTION_VALUE', payload: value})

    const onCreateTodo = async () => {
        const data = await createTodos(title, description).then(value => value.data);
        dispatch({type: 'CREATE_TODO', payload: data})
    }

    const onSubmitForm = (e) => {
        if (!title || !description) return;
        e.preventDefault();
        onCreateTodo();
    }

    return (
        <form className={'form'} onSubmit={onSubmitForm}>
            <div className="form_item">
                <label htmlFor="title">Title: </label><br/>
                <input type="text" id={'title'} value={title} onChange={onChangeTitle}/>
            </div>

            <div className="form_item">
                <label htmlFor="description">Description: </label><br/>
                <input type="text" id={'description'} value={description} onChange={onChangeDescription}/>
            </div>
            <button disabled={!title || !description}>create new todo</button>
        </form>
    )
}

export default MyForm;