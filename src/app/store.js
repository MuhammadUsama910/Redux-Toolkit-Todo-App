import { configureStore } from "@reduxjs/toolkit";

//store needs knowledge of reducers

import todoReducer from "../features/todo/todoSlice";

//configureStore method takes an object.

export const store = configureStore({
  reducer: todoReducer
}) 