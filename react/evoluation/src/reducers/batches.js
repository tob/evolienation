// import {
//   BATCH_FETCHED,
//   BATCH_CREATED,
//  } from '../actions/batches/subscribe'
 import { FETCHED_BATCHES } from '../actions/batches/fetch'
 import { CREATE_BATCH } from '../actions/batches/create'


export default (state = [], { type, payload } = {})  => {

  switch(type) {
    case FETCHED_BATCHES :
      return [].concat(payload)

    case CREATE_BATCH :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
