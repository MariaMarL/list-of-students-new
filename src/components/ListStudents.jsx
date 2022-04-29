import React from 'react'
import {FaSkullCrossbones} from 'react-icons/fa'

const ListStudents = ({students, onDelete}) => {
  return (
    <>
        {students.map((student, index) => 
        <div className = 'task' key={index}>
        <h3>{student.name} {student.lastName} <FaSkullCrossbones color='red' onClick={()=>onDelete(student.id)} /> </h3>
        </div>)}
    </>
  )
}

export default ListStudents
