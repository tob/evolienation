import API from '../../api'
import { loading, loadError, loadSuccess, authError } from '../loading'

export const CREATE_EVALUATION = 'CREATE_EVALUATION'

const api = new API()

export default (newEvaluation) => {
  return (dispatch) => {
    dispatch(loading(true))

        api.service('evaluations')
          .create(newEvaluation)
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
