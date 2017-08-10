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
import { showError } from '../actions/loading'
import { showSuccess } from '../actions/loading'
import StudentEditor from '../students/StudentEditor'
import 'react-select/dist/react-select.css';

const style = {
  marginRight: 20,
};


class BatchEditor extends PureComponent {
  constructor(props) {
    super()
    const { name, startDate, endDate} = props
    this.state = {
      name,
      startDate,
      endDate,
      success:{},
      errors: {}
    }
  }

  componentWillReceiveProps(newProps) {
    const { replace, signedIn, showError, showSuccess } = newProps
  }

  updateStartDate(event){
    this.setState({
      startDate: this.refs.startDate.state.date,
      // endDate: this.refs.endDate.state.date,
    })
  }

  updateEndDate(event){
    this.setState({

      endDate: this.refs.endDate.state.date,
    })
  }

  updateBatch(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
    this.setState({
      name: this.refs.name.value,
      startDate: this.refs.startDate.state.date,
      endDate: this.refs.endDate.state.date,

    })
  }

  isValid() {
    const batch = this.state

    let errors = {}


    if (!batch.name) errors.name = 'Please provide a name!'

    if (!batch.startDate) errors.startDate = 'Please provide a startDate!'
    if (!batch.endDate) errors.endDate = 'Please provide a endDate!'

    this.setState({ errors })

    return Object.keys(errors).length === 0
  }

  isSuccessfull(){
    const batch = this.state
    let success = {}
    if (batch.name) success.name = batch.name
    if (batch.startDate) success.startDate = batch.startDate
    if (batch.endDate) success.endDate = batch.endDate
    this.setState({ success })
    return Object.keys(success).length === 0
  }


  onSubmit(form) {
       const errors = this.refs.form.showFieldErrors();
       const success = this.refs.form.showFieldSuccess();
   }

  saveBatch() {
    if (!this.isValid()) return

    const batch = this.state


    this.props.createdBatch(
      Object.assign({},batch))


    this.isSuccessfull()
  }


//////////////////////////////////////////////

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

////////////////////////////////////////////////////



  render() {
    const errors = this.state.errors
    const success = this.state.success //success defined in payload of loading

    return (


      <div className="editor">
        <div>
          <h2>{this.state.name}</h2>
        </div>
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateBatch.bind(this)}
          onKeyDown={this.updateBatch.bind(this)}
          />
          <p>{errors.name}</p>

        <DatePicker ref={"startDate"} onChange={this.updateStartDate.bind(this)} hintText="Start Date" mode="landscape" />
        <p>{errors.startDate}</p>

        <DatePicker ref={"endDate"} onChange={this.updateEndDate.bind(this)} defaultDate={this.state.startDate} hintText="End date" mode="landscape" />
        <p>{errors.endDate}</p>

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
        <p>{success.name}</p>
        <p>{success.startDate}</p>
        <p>{success.name}</p>
      </div>
    )
  }
}


export default connect(null, { createdBatch })(BatchEditor)
