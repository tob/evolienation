// src/evaluations/EvaluationsList.js
import Title from '../components/title'
import EvalEditor from './evalEditor'
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchEvaluations from '../actions/evaluations/fetch'
import subscribeToEvaluationsService from '../actions/evaluations/subscribe'
import Evaluation from './evaluation'

class EvaluationsList extends PureComponent {
  static propTypes = {
      evaluations: PropTypes.array.isRequired,
      fetchEvaluations: PropTypes.func.isRequired,
      subscribeToEvaluationsService: PropTypes.func.isRequired
    }

  componentWillMount() {
      this.props.fetchEvaluations()
      this.props.subscribeToEvaluationsService()
  }

  renderEvaluation(evaluation, index) {
    return <Evaluation key={index} { ...evaluation } />
  }

  render() {
    return(
      <div className="evaluations wrapper">
        <main>
          { this.props.evaluations.map(this.renderEvaluation) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    evaluations: store.evaluations
  }
}

export default connect(mapStateToProps, { fetchEvaluations, subscribeToEvaluationsService })(EvaluationsList)
