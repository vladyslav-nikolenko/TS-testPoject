import React, {FC} from 'react';
import { ITodo} from '../types/types';




interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  
  return (
    <div>
        
      <div style={{padding: 15, border: '1px solid gray'}}><input type='checkbox' checked={todo.completed}/>
      #{todo.id} Titile: {todo.title} Состояние:{todo.completed ? 'true' : 'false'}</div>
      
    </div>
  );
}

export default TodoItem;