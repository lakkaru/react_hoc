import React from 'react'
import withNotes from './withNotes'

 function Student({animal, name}) {
  return (
    <div>Student {animal} {name}</div>
  )
}
export default withNotes(Student)