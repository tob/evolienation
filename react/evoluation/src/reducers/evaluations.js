 import { FETCHED_EVALUATIONS } from '../actions/evaluations/fetch'
 import { CREATE_EVALUATION } from '../actions/evaluations/create'
 import { EVALUATION_CREATED } from '../actions/evaluations/subscribe'


export default (state = [], { type, payload } = {})  => {

  switch(type) {
    case FETCHED_EVALUATIONS :
      return [].concat(payload)

    case EVALUATION_CREATED :
      return Object.assign({}, payload).concat(state)

    default :
      return state
  }
}
