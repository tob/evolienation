import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { STUDENT_CREATED } from '../actions/students/subscribe'

 // const students =

export default (state = [], { type, payload } = {})  => {

  switch(type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

    case STUDENT_CREATED :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
