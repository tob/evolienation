import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class Student extends PureComponent {
  render() {
    const { _id, name, currentColor, evaluations, picture } = this.props

    return(
      <article className="student">
        <h1>{ name }</h1>
        <div>
          <p>{ currentColor }</p>
          <Link to={`/students/${_id}`}>{ name }</Link>
        </div>
        <hr/>
      </article>
    )
  }
}

export default Student
