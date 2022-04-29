import React, { useState } from 'react'
import ListStudents from './ListStudents';

const Form = () => {
  const onAddStudent = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() *1000);
    if(name && lastName){
      const student = {
        id,
        name,
        lastName
      }
      setList([...list, student])
    } 
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event)=>{
    setName(event.target.value)
  }

 const addLastName = (event) => {
    setLastName(event.target.value)
 }

 const deleteStudent = (id) =>{
   setList(list.filter((student)=>{
     if(student.id !== id ){
       return student;
     }
   }))
 }
  return ( 
    <div>
      <h1>Hello from the list of students</h1>
      <form className = 'form-control'>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button className = 'btn' onClick={onAddStudent}>add student</button>
        <ListStudents className = 'form-control' students={list} onDelete={deleteStudent}/>
      </form>
    </div>
  )
}

export default Form
