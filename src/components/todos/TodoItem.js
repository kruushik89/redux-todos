import React from 'react';

const TodoItem = ({item, onDeleteTodo, onChangeTodoStatus}) => {
    return (
        <div className={'card_todo'}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>{item.completed.toString()}</p>
            <button onClick={() => onDeleteTodo(item.id)}>Delete todo</button>
            <button onClick={() => onChangeTodoStatus(item.id, item.completed)}>Change status todo</button>
        </div>
    )
}

export default TodoItem;