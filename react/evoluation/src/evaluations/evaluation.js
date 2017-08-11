import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class Evaluation extends PureComponent {
  render() {
    const { _id, remark, studentId, color} = this.props

    return(
      <article className="batch">
        <h1>{ remark }</h1>
        <div>
          <p>{ color }</p>
          <p>{ studentId }</p>
          <Link to={`/evaluations/${_id}`}>See details</Link>
        </div>
        <hr/>
      </article>
    )
  }
}

export default Evaluation
