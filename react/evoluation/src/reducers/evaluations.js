 import { FETCHED_EVALUATIONS } from '../actions/evaluations/fetch'
 import { CREATE_EVALUATION } from '../actions/evaluations/create'


export default (state = [], { type, payload } = {})  => {

  switch(type) {
    case FETCHED_EVALUATIONS :
      return [].concat(payload)

    case CREATE_EVALUATION :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
