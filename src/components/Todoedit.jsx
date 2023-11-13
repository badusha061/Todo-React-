import React ,{useState} from 'react'
import Swal from 'sweetalert2';

export const EditTodoform = ({editTodo , task}) => {
  const [value , setValue] = useState(task.task)

  const handleSubmit = (e) => {
      e.preventDefault();
      if (value.trim() !== task.task.trim()){
        editTodo(value , task.id)
        Swal.fire({
          icon: 'success',
          title: 'Task Updated!',
          showConfirmButton: false,
          timer: 1500, 
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No changes made.',
          showConfirmButton: false,
          timer: 1500, 
        });
      }

      setValue('');
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text"  className='todo-input' placeholder='Update the task' 
      value={value}  onChange={(e) => setValue(e.target.value) }
      />
      <button className='todo-btn' type='submit' > Edit Task</button>
    </form>

  )
}

export default EditTodoform