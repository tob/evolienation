import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import Title from '../components/title'

export class StudentPage extends PureComponent {
  static propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  currentColor: PropTypes.string,
  fetchRecipes: PropTypes.func.isRequired,
}

  componentWillMount() {
    this.props.fetchStudents()
  }

  render() {
    const { name } = this.props

    return(
      <div className="student page">
        <Title content={ name } />
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
