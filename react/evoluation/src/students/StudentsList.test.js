// src/students/StudentsList.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import StudentsList from './StudentsList'

chai.use(chaiEnzyme())

describe('<StudentsList />', () => {
  const container = shallow(<StudentsList students={[]} />)

  it('is wrapped in a div with class name "students"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('students')
  })
})
