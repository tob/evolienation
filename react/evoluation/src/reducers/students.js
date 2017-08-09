import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { CREATE_STUDENT } from '../actions/students/create'

 // const students =

export default (state = [], { type, payload } = {})  => {

  switch(type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

    case CREATE_STUDENT :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
