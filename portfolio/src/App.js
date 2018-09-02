import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Sections from './components/Sections';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Sections />
      </div>
    );
  }
}

export default App;
