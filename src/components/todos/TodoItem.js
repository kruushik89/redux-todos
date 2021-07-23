import React from 'react';

const TodoItem = ({item, onDeleteTodo}) => {
    return (
        <div className={'card_todo'}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.completed.toString()}</p>
            <button onClick={() => onDeleteTodo(item.id)}>Delete todo</button>
        </div>
    )
}

export default TodoItem;