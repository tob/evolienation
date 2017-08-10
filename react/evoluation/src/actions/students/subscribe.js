// src/actions/students/subscribe.js
import API from '../../api'

export const SUBSCRIBED_TO_STUDENTS_SERVICE = 'SUBSCRIBED_TO_STUDENTS_SERVICE'
export const STUDENT_CREATED = 'STUDENT_CREATED'
export const STUDENT_UPDATED = 'STUDENT_UPDATED'
export const STUDENT_REMOVED = 'STUDENT_REMOVED'
export const STUDENT_FETCHED = 'STUDENT_FETCHED'


const api = new API()
const students = api.service('students')

export default () => {
  return (dispatch) => {
    students.on('fetched', (student) => { dispatch(fetchedStudent(student)) })
    students.on('created', (student) => { dispatch(createdStudent(student)) })
    students.on('updated', (student) => { dispatch(updatedStudent(student)) })
    students.on('patched', (student) => { dispatch(updatedStudent(student)) })
    students.on('removed', (student) => { dispatch(removedStudent(student)) })

    dispatch({ type: SUBSCRIBED_TO_STUDENTS_SERVICE })
  }
}

const fetchedStudent = (student) => {
  return {
    type: STUDENT_FETCHED,
    payload: student
  }
}


const createdStudent = (student) => {
  return {
    type: STUDENT_CREATED,
    payload: student
  }
}

const updatedStudent = (student) => {
  return {
    type: STUDENT_UPDATED,
    payload: student
  }
}

const removedStudent = (student) => {
  return {
    type: STUDENT_REMOVED,
    payload: student
  }
}
