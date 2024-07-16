import { configureStore } from "@reduxjs/toolkit";

//store needs knowledge of reducers
import todoReducer from "../features/todo/todoSlice";

//combine the reducers/slices if multiple
import { combineReducers } from "@reduxjs/toolkit";

//persist store
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// 1. Combine Reducers if you have multiple slices in rtk
const rootReducer = combineReducers({
  todo: todoReducer
})

// 2. Define persistConfig
const persistConfig = {

  key: "root",  // The key under which to store the persisted data
  storage      // The storage engine to use (localStorage for web)
}

// 3. Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure the store with the persisted reducer. (configureStore method takes an object)
export const store = configureStore({
  reducer: persistedReducer
})

// 5. Create the persistor
export const persistor = persistStore(store);