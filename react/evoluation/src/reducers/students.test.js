import chai, { expect } from 'chai'
import students from './students'

describe('students reducer', () => {
  const reducer = students
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
