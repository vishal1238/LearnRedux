//Store - Is what holds all the data your appliction uses.
//Reducer - Is what manipulates that data when it recieves an action.
//Action - Is what tells reducer to manipulate the store data, it carries the name and (not required) some data.


// Reducer is usually in a formate of swtich statement, that swtiches between all possible Actions(Cases) and then manipulates the Store data based on action. When a reducer data changes within the redux, the properties in your components are changed and then the re-render occurs.



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
    <div>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      Curently count is {count}
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(multiply())}>
        *
      </button>
    </div>
    </>
  )
}

export default App
