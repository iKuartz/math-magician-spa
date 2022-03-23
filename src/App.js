import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import NavBar from './components/Nav';
import './components/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
