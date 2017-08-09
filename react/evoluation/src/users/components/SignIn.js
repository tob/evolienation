import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../../store'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import signIn from '../../actions/users/SignIn'
import Title from '../../components/title'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class SignIn extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    signIn: PropTypes.func.isRequired,
  }

  componentWillMount() {
    if (this.props.signedIn) {
      history.replace('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      history.push('/')
    }
  }

  submitForm(event) {
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    }
    this.props.signIn(user)
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"  />
          </div>
          <RaisedButton
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label="Sign in"
            primary={true} />
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser
})

export default connect(mapStateToProps, { signIn })(SignIn)
