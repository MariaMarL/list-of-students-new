import { useState } from 'react'
import Form from './components/Form'
//import ListOfStudents from './components/Form'


function App() {

  // const [number, setNumber] = useState(0)

  // const addToNumber = ()=>{
  //   setNumber(number + 1)
  // }

  // const substractToNumber = ()=>{
  //   setNumber(number - 1)
  // }

  return (
    <div className ='container'>
      <h1>My first application</h1>
      {/* <h1>{number}</h1>
      <button onClick={addToNumber}>+</button>
      <button onClick={substractToNumber}>-</button> */}
      <Form />
    </div>
  )
}

export default App
