import API from '../../api'

export const FETCHED_EVALUATIONS = 'FETCHED_EVALUATIONS'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('evaluations')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_EVALUATIONS,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
