import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* eslint-disable class-methods-use-this */
  render() {
    return (<Calculator />);
  }
}

export default App;
