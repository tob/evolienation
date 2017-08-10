import API from '../../api'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('batches')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_BATCHES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
