// src/students/StudentsList.js
import Title from '../components/title'
import Student from './Student'
import StudentEditor from './StudentEditor'
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'



class StudentsList extends PureComponent {

  static propTypes = {
      students: PropTypes.array.isRequired,
      fetchStudents: PropTypes.func.isRequired,
    }

  componentWillMount() {
      this.props.fetchStudents()
    }


  renderStudent(student, index) {
    return <Student key={index} { ...student } />
  }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="Students" />
          <StudentEditor />
        </header>

        <main>
          { this.props.students.map(this.renderStudent) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({
  students
})

export default connect(mapStateToProps, { fetchStudents })(StudentsList)
