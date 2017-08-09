import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import Select from 'react-select';
import createStudent from '../actions/students/create'

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';



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

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      // this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePicture(event) {
    this.setState({
      picture: this.refs.picture.value
    })
  }

  updateCurrentColor(event) {
    this.setState({
      currentColor: this.refs.currentColor.value
    })
  }

  saveStudent() {
    const {
      name,
      picture,
      classId,
      currentColor,
      evaluation,
    } = this.state

    const student = {
      picture,
      name,
      picture,
      classId,
      currentColor,
      evaluation,
    }

    console.log(student)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />

        <input
          type="text"
          ref="picture"
          className="picture"
          placeholder="Picture URL"
          defaultValue={this.state.picture}
          onChange={this.updatePicture.bind(this)}
          onKeyDown={this.updatePicture.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}


export default connect(null, { createStudent })(StudentEditor)
