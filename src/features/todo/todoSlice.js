import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      name: "Hello World",
      time: 20
    }
  ]
}

// accepts an object {} of reducer functions, a slice name, and an initial state value, 
// and automatically generates a slice reducer with corresponding action creators and action types.
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    
    addTodo: (state, action) => {

      console.log("addTodo Reducer: ", action.payload);
      const { name, time } = action.payload;
      
      const newTodo = {
        id: nanoid(),
        name: name,
        time: time
      };

      state.todos.push(newTodo);
    },

    removeTodo: (state, action) => {

      console.log("removeTodo Reducer: ", action.payload);

      state.todos = state.todos.filter((todoItem) => { //filter method returns an array of those items that pass a specific condition/test.
       return todoItem.id !== action.payload
      })

      // state.todos = state.todos.filter(todo => todo.id !== action.payload)

    },

    updateTodo: (state, action) => {

      console.log("\nupdateTodo Reducer: ", action.payload)

      const { id, name, time } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo){
        todo.name = name;
        todo.time = time;
      }
    }
  }
})

//they will help us in React Components.
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;


// exporting all reducers as default so that we can register them in store
// so that our store can update the values of registered reducers
// giving awareness to store about reducers

export default todoSlice.reducer
