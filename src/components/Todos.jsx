import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice"
import { CiTrash, CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const Todos = () => {

  //I have combine the todoReducer under todo key, in the store.js file that's why I am doing state.todo.todos
  const todos = useSelector(state => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const [updateName, setUpdateName] = useState("");
  const [updateTime, setUpdateTime] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEditId = (id, prevName, prevTime) => {
    
    setUpdateName(prevName);
    setUpdateTime(prevTime);
    setEditId(id);
  }

  const handleCancelUpdateBtn = () => {

    setEditId(null);
  }

  const updateTodoHandler = (e) => {
    
    e.preventDefault();
    if(updateName && updateTime)
    {
      dispatch(
        updateTodo({
          id: editId,
          name: updateName,
          time: updateTime
      }));

      toast.success("Todo update successfully..!");
  
      setEditId(null);
      setUpdateName("");
      setUpdateTime("");
    }
    else {
      toast.error("Enter value in both text fields..!")
    }
  }

  const handleTodoDelete = (id) => {

    if(id)
    {
      dispatch(removeTodo(id))
      toast.success("Todo deleted successfully..!");
    }
    else{
      toast.error("Unable to delete todo..!")
    }
  }

  return (
    <>
    <div className="text-xl mt-8 mb-6 font-semibold">Todos</div>
    <ul className="list-none">
      {
        todos.length > 0 ? (
          todos.map((todoItem) => (

            <li 
              key={todoItem.id}
              className="max-w-3xl m-auto mt-4 px-4 py-2 flex justify-between items-center rounded bg-zinc-800"
            >
              <div className="flex flex-col text-start">
                <div className="text-white"> {todoItem.name} </div>
                <div className="text-white"> {todoItem.time} hours to complete </div>
              </div>
              
              <div className="space-x-6">
                
                <button
                  className="text-white py-1 px-4 border-none rounded bg-red-500 hover:bg-red-600 focus:outline-none"
                  onClick={() => handleEditId(todoItem.id, todoItem.name, todoItem.time)}>
  
                  <CiEdit size="20px"/>
                </button>
  
                <button
                  className="text-white py-1 px-4 border-none rounded bg-red-500 hover:bg-red-600 focus:outline-none"
                  onClick={() => handleTodoDelete(todoItem.id)}>
  
                  <CiTrash size="20px"/>
                </button>
  
              </div>
            </li>
          ))
        ) 
        : 
        (<h2> No Todo Found... </h2>)
      }
    </ul>

    {/* Modal or Popup */}
    
    { editId !== null &&
      
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        
        <div className="bg-white p-6 rounded shadow-lg w-96">
          
          <h2 className="text-xl font-semibold mb-4">Update Todo Item</h2>
      
          <input 
            type="text" 
            placeholder="Update Todo Name..." 
            className="border p-2 w-full mb-4 rounded"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Update Todo Time..." 
            className="border p-2 w-full mb-4 rounded"
            value={updateTime}
            onChange={(e) => setUpdateTime(e.target.value)}
          />
      
          <button 
            className="bg-blue-500 text-white mt-2 py-2 px-4 rounded hover:bg-blue-700"
            onClick={updateTodoHandler}
          >
            Update
          </button>

          <button 
            className="bg-white text-black ml-2 mt-2 py-2 px-4 border border-black rounded hover:bg-green-400"
            onClick={handleCancelUpdateBtn}
          >
            Cancel
          </button>
        
        </div>
      </div>
    }
    </>
  )
}

export default Todos