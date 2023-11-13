import React, { useState } from 'react';
import Todoform from './Todoform';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import { toASCII } from 'punycode';
import Swal from 'sweetalert2';
import { EditTodoform } from './Todoedit';

export const Todowrapper = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (task) => {

    const trimtask = task.trim();

    if (trimtask === ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Task cannot be empty!',
      });
      return;
    }

    setTodo([...todo, { id: uuidv4(), task: trimtask, completed: false, isEditing: false }]);
  };  

  const toggleComplete = (id) => {
    setTodo(todo.map(todoItem => todoItem.id === id ? {...todoItem, completed: !todoItem.completed} : todoItem ))
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter(todoItem => todoItem.id !== id  ))
  };

  const editTodo = (id) => {
    setTodo(todo.map(todoItem => todoItem.id === id ? {...todoItem , isEditing: !todoItem.isEditing} : todoItem ))
  }

  const editTask = (task, id) => [
    setTodo(todo.map(todoItem => todoItem.id === id ? {...todoItem , task , isEditing: !todoItem.isEditing}:todoItem ))
  ]
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <Todoform addTodo={addTodo} />

      {todo.map((todoItem, index) => (
        todoItem.isEditing ? (
          <EditTodoform  key={`edit-${todoItem.id}`} editTodo={editTask} task={todoItem} />
        ): (
          <Todo task={todoItem} key={todoItem.id} toggleComplete ={toggleComplete} deleteTodo = {deleteTodo} editTodo = {editTodo} />
        )        
      ))} 
    </div>
  );
};

export default Todowrapper;
