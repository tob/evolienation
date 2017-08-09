// src/components/Title.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
  return (
    <h1>{ this.props.content }</h1>
  )
  }
}
export default Title
