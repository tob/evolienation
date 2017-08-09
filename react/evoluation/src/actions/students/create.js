export const CREATE_STUDENT = 'CREATE_STUDENT'

export default (newStudent) => {
  return {
    type: CREATE_STUDENT,
    payload: newStudent
  }
}
