//Component Container Single Evaluation

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchEvaluations from '../actions/evaluations/fetch'
import Title from '../components/title'
import EvaluationEditor from '../evaluations/evalEditor'

export class EvaluationPage extends PureComponent {
  static propTypes = {
  _id: PropTypes.string,
  remark: PropTypes.string,
  color: PropTypes.string,
  fetchEvaluations: PropTypes.func.isRequired,
}

  componentWillMount() {
    this.props.fetchEvaluations()
  }

  render() {
    const { color, remark, date, studentId } = this.props

    return(
      <div className="evaluation page">

        <header>
          <Title content="Evaluations" />
          <Title content={ remark } />
          <EvaluationEditor />
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ evaluations }, { params }) => {
  const evaluation = evaluations.reduce((prev, next) => {
    if (next._id === params.evaluationId) {
      return next
    }
    return prev
  }, {})

  return {
    ...evaluation
  }
}

export default connect(mapStateToProps, { fetchEvaluations })(EvaluationPage)
