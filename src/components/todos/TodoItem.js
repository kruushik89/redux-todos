import React from 'react';

const TodoItem = ({item}) => {
    return (
        <div className={'card_todo'}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.completed.toString()}</p>
        </div>
    )
}

export default TodoItem;