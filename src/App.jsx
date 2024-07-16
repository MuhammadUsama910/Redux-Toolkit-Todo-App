import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster position='top-right'/>
      <h1 className='text-2xl font-semibold'> Learn about redux toolkit </h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
