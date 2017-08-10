// src/batches/BatchesList.js
import Title from '../components/title'
import Batch from './Batch'
import BatchEditor from './BatchEditor'
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchBatches from '../actions/batches/fetch'
import subscribeToBatchesService from '../actions/batches/subscribe'

class BatchesList extends PureComponent {
  static propTypes = {
      batches: PropTypes.array.isRequired,
      fetchBatches: PropTypes.func.isRequired,
      subscribeToBatchesService: PropTypes.func.isRequired
    }

  componentWillMount() {
      this.props.fetchBatches()
      this.props.subscribeToBatchesService()
  }

  renderBatch(batch, index) {
    return <Batch key={index} { ...batch } />
  }

  render() {
    return(
      <div className="batches wrapper">
        <header>
          <Title content="Batches" />
          <BatchEditor />
        </header>

        <main>
          { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    batches: store.batches
  }
}

export default connect(mapStateToProps, { fetchBatches, subscribeToBatchesService })(BatchesList)
