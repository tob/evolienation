//Editor Component for evaluations
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Select from 'react-select';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import DatePicker from 'material-ui/DatePicker';
import createdEvaluation from '../actions/evaluations/create'
import { showError } from '../actions/loading'
import { showSuccess } from '../actions/loading'
import 'react-select/dist/react-select.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentBlock from 'material-ui/svg-icons/content/block';

const style = {
  marginRight: 20,
};


class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()
    const { color, remark, date, studentId} = props
    this.state = {
      color,
      remark,
      date,
      studentId,
      open: false,
      success:{},
      errors: {}
    }
  }

  componentWillReceiveProps(newProps) {
    const { color, remark, date, studentId, showError, showSuccess } = newProps
  }

  updateColor(event){
    this.setState({
      color: this.refs.color.props.backgroundColor,
    })
  }

  updateDate(event){
    this.setState({
      date: this.refs.Date.state.date,
    })
  }

  updateEvaluation(event) {
    // if (event.keyCode === 13) {
    //   event.preventDefault()
    // }

    this.setState({
      color: this.refs.color.props.backgroundColor,
      date: this.refs.Date.state.date,
      remark: this.refs.remark.value
    })
  }

  isValid() {
    const evaluation = this.state
    let errors = {}
    if (!evaluation.color) errors.color = 'Please provide a color!'
    this.setState({ errors })
    return Object.keys(errors).length === 0
  }

  isSuccessfull(){
    const evaluation = this.state
    let success = {}
    if (evaluation.color) success.color = evaluation.color
    this.setState({ success })
    return Object.keys(success).length === 0
  }


  onSubmit(form) {
       const errors = this.refs.form.showFieldErrors();
       const success = this.refs.form.showFieldSuccess();
   }

  saveEvaluation() {
    if (!this.isValid()) return

    const evaluation = this.state

    this.props.createdEvaluation(
      Object.assign({},evaluation))


    this.isSuccessfull()
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  render() {
    const errors = this.state.errors
    const success = this.state.success //success defined in payload of loading
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            // onTouchTap={this.saveEvaluation.bind(this)}
            onClick={this.saveEvaluation.bind(this)}
          />,
        ];

    return (

      <div>
       <RaisedButton label="Dialog" onTouchTap={this.handleOpen} onClick={this.saveEvaluation.bind(this)} />
       <Dialog
         title="Pick a color"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}>
          <div className="editor">

            <p>{errors.studentId}</p>

            <h2>{this.state.remark}</h2>
            <input
              type="text"
              ref="remark"
              className="remark"
              placeholder="remark"
              defaultValue={this.state.remark}
              onChange={this.updateEvaluation.bind(this)}
              onKeyDown={this.updateEvaluation.bind(this)}
              />
              <p>{errors.remark}</p>

            <DatePicker ref={"Date"} onChange={this.updateDate.bind(this)} hintText="Date" mode="landscape" />
            <p>{errors.date}</p>

            <div>
            <FloatingActionButton secondary
              onClick={this.updateColor.bind(this)}
              ref="color"
              backgroundColor={"green"}
              style={style}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onClick={this.updateColor.bind(this)}
              ref="color"
              backgroundColor={"yellow"}
              style={style}>
              <ContentBlock />
            </FloatingActionButton>
            <FloatingActionButton
              onClick={this.updateColor.bind(this)}
              ref="color"
              backgroundColor={"red"}
              style={style}>
              <ContentRemove />
            </FloatingActionButton>
            </div>

            <p>{errors.color}</p>

            <div className="actions">
              <button className="primary" onClick={this.saveEvaluation.bind(this)}>Save</button>
            </div>
            <p>{success.name}</p>
          </div>
      </Dialog>
    </div>
    )
  }
}


export default connect(null, { createdEvaluation })(EvaluationEditor)
