//Component Container Single Batch

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import Title from '../components/title'
import BatchEditor from './BatchEditor'

export class BatchPage extends PureComponent {
  static propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  currentColor: PropTypes.string,
  fetchRecipes: PropTypes.func.isRequired,
}

  componentWillMount() {
    this.props.fetchBatches()
  }

  render() {
    const { name } = this.props

    return(
      <div className="batch page">
        <Title content={ name } />
        <BatchEditor />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { params }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchBatches })(BatchPage)
