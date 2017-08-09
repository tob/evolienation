// src/actions/students/subscribe.js
import API from '../../api'

export const SUBSCRIBED_TO_STUDENTS_SERVICE = 'SUBSCRIBED_TO_STUDENTS_SERVICE'
export const STUDENT_CREATED = 'STUDENT_CREATED'
export const STUDENT_UPDATED = 'STUDENT_UPDATED'
export const STUDENT_REMOVED = 'STUDENT_REMOVED'

const api = new API()
const recipes = api.service('students')

export default () => {
  return (dispatch) => {
    students.on('created', (student) => { dispatch(createdRecipe(student)) })
    students.on('updated', (student) => { dispatch(updatedRecipe(student)) })
    students.on('patched', (student) => { dispatch(updatedRecipe(student)) })
    students.on('removed', (student) => { dispatch(removedRecipe(student)) })

    dispatch({ type: SUBSCRIBED_TO_STUDENTS_SERVICE })
  }
}

const createdRecipe = (student) => {
  return {
    type: STUDENT_CREATED,
    payload: student
  }
}

const updatedRecipe = (student) => {
  return {
    type: STUDENT_UPDATED,
    payload: student
  }
}

const removedRecipe = (student) => {
  return {
    type: STUDENT_REMOVED,
    payload: student
  }
}
