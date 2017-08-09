import React, { PureComponent } from 'react'
import logo from './logo.svg';
import './App.css';
import Title from './components/title'
import StudentsList from './students/StudentsList'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default App;
