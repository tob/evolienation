// src/actions/evaluations/subscribe.js
import API from '../../api'

export const SUBSCRIBED_TO_EVALUATIONS_SERVICE = 'SUBSCRIBED_TO_EVALUATIONS_SERVICE'
export const EVALUATION_FETCHED = 'EVALUATION_FETCHED'
export const EVALUATION_CREATED = 'EVALUATION_CREATED'
export const EVALUATION_UPDATED = 'EVALUATION_UPDATED'
export const EVALUATION_REMOVED = 'EVALUATION_REMOVED'

const api = new API()
const evaluations = api.service('evaluations')

export default () => {
  return (dispatch) => {
    evaluations.on('fetched', (evaluation) => { dispatch(fetchedEvaluation(evaluation)) })
    evaluations.on('created', (evaluation) => { dispatch(createdEvaluation(evaluation),) })
    evaluations.on('updated', (evaluation) => { dispatch(updatedEvaluation(evaluation)) })
    evaluations.on('patched', (evaluation) => { dispatch(updatedEvaluation(evaluation)) })
    evaluations.on('removed', (evaluation) => { dispatch(removedEvaluation(evaluation)) })

    dispatch({ type: SUBSCRIBED_TO_EVALUATIONS_SERVICE })
  }
}

const fetchedEvaluation = (evaluation) => {
  return {
    type: EVALUATION_FETCHED,
    payload: evaluation
  }
}

const createdEvaluation = (evaluation) => {
  return {
    type: EVALUATION_CREATED,
    payload: evaluation
  }
}

const updatedEvaluation = (evaluation) => {
  return {
    type: EVALUATION_UPDATED,
    payload: evaluation
  }
}

const removedEvaluation = (evaluation) => {
  return {
    type: EVALUATION_REMOVED,
    payload: evaluation
  }
}
