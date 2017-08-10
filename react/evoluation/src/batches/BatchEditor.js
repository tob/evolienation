//Editor Component for batches
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Select from 'react-select';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DatePicker from 'material-ui/DatePicker';
import createdBatch from '../actions/batches/create'

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

const style = {
  marginRight: 20,
};


class BatchEditor extends PureComponent {
  constructor(props) {
    super()
    const { name, startDate, endDate,} = props
    this.state = {
      name,
      startDate,
      endDate,
    }
  }

  updateBatch(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      // this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value,
      // name: 'this is a name'
      startDate: this.refs.startDate.state.date,
      endDate: this.refs.endDate.state.date,

    })
    debugger
  }

  isValid() {
    const batch = this.state

    let errors = {}

    if (!batch.name) errors.name = 'Please provide a name!'

    this.setState({ errors })

    return Object.keys(errors).length === 0
  }

  saveBatch() {

    if (!this.isValid()) return

    const batch = this.state

    this.props.createdBatch(
      Object.assign({},batch))
  }
////////////////////////////////////////////////////


  render() {
    const { errors } = this.state
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateBatch.bind(this)}
          onKeyDown={this.updateBatch.bind(this)}
          />

        <DatePicker ref={"startDate"} onClick={this.updateBatch.bind(this)} hintText="Start date" mode="landscape" />

        <DatePicker ref={"endDate"} onClick={this.updateBatch.bind(this)} hintText="End date" mode="landscape" />


        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}


export default connect(null, { createdBatch })(BatchEditor)
