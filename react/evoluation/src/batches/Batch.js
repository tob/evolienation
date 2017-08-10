import React, { PureComponent } from 'react'
import { Link } from 'react-router'

class Batch extends PureComponent {
  render() {
    const { _id, name, startDate, endDate} = this.props

    return(
      <article className="batch">
        <h1>{ name }</h1>
        <div>
          <p>{ startDate }</p>
          <p>{ endDate }</p>
          <Link to={`/batches/${_id}`}>See details</Link>
        </div>
        <hr/>
      </article>
    )
  }
}

export default Batch
