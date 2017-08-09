import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import '../assets/Editor.css'

const TYPES = [

]

class RecipeEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, summary, vegan, vegetarian, pescatarian, photo } = props
    const { name, currentColor, evaluations, picture } = props

    this.state = {
      name,
      summary,
      vegan,
      vegetarian,
      pescatarian,
      photo,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }


  setType(event) {
    this.setState({
      vegan: event.target.value === 'vegan',
      vegetarian: event.target.value === 'vegetarian',
      pescatarian: event.target.value === 'pescatarian'
    })
  }

  saveRecipe() {
    const {
      name,
      summary,
      vegetarian,
      vegan,
      pescatarian,
      photo,
    } = this.state

    const recipe = {
      name,
      summary: toMarkdown(summary),
      vegetarian,
      vegan,
      pescatarian,
      liked: false,
      photo,
    }

    console.log(recipe)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Title"
          defaultValue={this.state.name}
          onChange={this.updateTitle.bind(this)}
          onKeyDown={this.updateTitle.bind(this)} />

        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write an Introduction...'}
          }}
          onChange={this.updateIntro.bind(this)}
          text={this.state.summary} />

        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />

        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}

        <div className="actions">
          <button className="primary" onClick={this.saveRecipe.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default RecipeEditor
