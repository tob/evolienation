import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/users/SignOut'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui/svg-icons/action/visibility'
import Visibility_off from 'material-ui/svg-icons/action/lock'



class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  signIn = () => {
    this.props.push('/SignIn')
  }

  goHome = () => {
    this.props.push('/')
  }

  render() {
    const { signedIn, signOut } = this.props
    return (
      <AppBar
        title="Evaluation of Evolving Alienation"
        iconElementLeft={signedIn ?
          <IconButton onClick={this.goHome}><Visibility /></IconButton> :
          <IconButton onClick={this.signIn}><Visibility_off /></IconButton>
        }
        iconElementRight={signedIn ?
          <IconButton onClick={signOut}><Visibility /></IconButton> :
          <IconButton onClick={this.signIn}><Visibility_off /></IconButton>
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { push, signOut })(Navigation)
