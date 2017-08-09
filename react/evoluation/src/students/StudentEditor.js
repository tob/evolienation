//Editor Component for students
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Select from 'react-select';
import createStudent from '../actions/students/create'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

const style = {
  marginRight: 20,
};
const yellow = {yellow
};


class StudentEditor extends PureComponent {

  constructor(props) {
    super()

    const { name, picture, currentColor, classId, evaluations } = props

    this.state = {
      name,
      picture,
      classId,
      currentColor,
      evaluations,
    }
  }

  updateStudent(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      // this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value,
      // name: 'this is a name'
      picture: this.refs.picture.value,
    })
  }

  isValid() {
    const student = this.state
    debugger
    let errors = {}

    if (!student.name) errors.name = 'Please provide a name!'

    this.setState({ errors })

    return Object.keys(errors).length === 0
  }

  saveStudent() {
    debugger
    if (!this.isValid()) return

    const student = this.state
    debugger;
    this.props.createStudent(
      Object.assign({},student))
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
          onChange={this.updateStudent.bind(this)}
          onKeyDown={this.updateStudent.bind(this)}
          />

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="Picture URL"
          defaultValue={this.state.picture}
          onChange={this.updateStudent.bind(this)}
          onKeyDown={this.updateStudent.bind(this)}
           />

        <div>
        <FloatingActionButton secondary style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton backgroundColor={"yellow"} style={style}>
          <ContentRemove />
        </FloatingActionButton>
        <FloatingActionButton style={style}>
          <ContentRemove />
        </FloatingActionButton>
        </div>

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}


export default connect(null, { createStudent })(StudentEditor)
