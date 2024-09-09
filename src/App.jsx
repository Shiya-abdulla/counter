import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter'

function App() {

  return (
    <>
      <h1 className='text-light text-center mt-5'>COUNTER APP</h1>
      <Counter/>
    </>
  )
}

export default App
