import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {

    e.preventDefault();
 
    if(name && time){
      dispatch(
        addTodo({
          name: name,
          time: time
      }));

      setName("");
      setTime("");
    }
    else{
      alert("Enter value in both text fields..!")
    }

  }

  return (
    <form 
      onSubmit={addTodoHandler} 
      className='mt-12 space-x-3'> {/* space-x-3 => margin-left: 12px or 0.75rem */}

      <input
        type='text'
        className='py-1 px-3 text-base text-white bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2
        focus:ring-indigo-900 focus:outline-none'
        placeholder='Enter Todo Name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='text'
        className='py-1 px-3 text-base text-white bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2
        focus:ring-indigo-900 focus:outline-none'
        placeholder='Enter Time to Complete...'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button
        type='submit'
        className='text-white text-lg rounded py-2 px-6 bg-indigo-500 hover:bg-indigo-600 
        border-none focus:outline-none '
      >
        Add Todo
      </button>

    </form>
  )
}

export default AddTodo