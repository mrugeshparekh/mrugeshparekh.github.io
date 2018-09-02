import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Sections from './components/Sections';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Sections />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
