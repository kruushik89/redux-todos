import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MyForm = () => {
    const {title, description} = useSelector(state => state.formReducer);
    const dispatch = useDispatch();


    const onChangeTitle = ({target: {value}}) => dispatch({type: 'TITLE_VALUE', payload: value})
    const onChangeDescription= ({target: {value}}) => dispatch({type: 'DESCRIPTION_VALUE', payload: value})


    return (
        <div className={'form'}>
            <div className="form_item">
                <label htmlFor="title">Title: </label><br/>
                <input type="text" id={'title'} value={title} onChange={onChangeTitle}/>
            </div>

            <div className="form_item">
                <label htmlFor="description">Description: </label><br/>
                <input type="text" id={'description'} value={description} onChange={onChangeDescription}/>
            </div>
        </div>
    )
}

export default MyForm;