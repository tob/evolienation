import API from '../../api'
import { loading, loadError, loadSuccess, authError } from '../loading'

export const CREATE_STUDENT = 'CREATE_STUDENT'

const api = new API()

export default (newStudent) => {
  return (dispatch) => {
    dispatch(loading(true))

        api.service('students')
          .create(newStudent)
          .then((result) => {
            dispatch(loadSuccess())
            dispatch(loading(false))
          })
          .catch((error) => {
            dispatch(loading(false))
            dispatch(loadError(error))
          })
      }
}
