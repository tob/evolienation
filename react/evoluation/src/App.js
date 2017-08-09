import React, { PureComponent } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import PropTypes from 'prop-types'
import Navigation from './components/navigation'

class App extends PureComponent {
  static childContextTypes = {
      muiTheme: PropTypes.object.isRequired,
    }

    getChildContext() {
      return { muiTheme }
    }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <Navigation />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
