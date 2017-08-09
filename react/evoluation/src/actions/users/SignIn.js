//Action
import API from '../../api'
import { loading, loadError, loadSuccess } from '../loading'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'
export const USER_UNKNOWN = 'USER_UNKNOWN'
export const USER_SIGNING_IN = 'USER_SIGNING_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    // dispatch(loading(true))
    dispatch({
      type: USER_SIGNING_IN,
      payload: user
    })

    api.authenticate(user)
      .then((result) => {
        // dispatch(loadSuccess())

        dispatch({
          type: USER_SIGNED_IN,
          payload: result
        })

        // dispatch(loading(false))
        history.push('/')
      })
      .catch((error) => {
        // dispatch(loading(false))
        // dispatch(loadError(error))
        dispatch({
          type: USER_UNKNOWN,
          payload: error
        })
        history.push('/error')
      })
  }
}
