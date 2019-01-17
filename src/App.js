import React, { Component } from 'react';
import Header from './desktop/Header';
import Main from './desktop/Main'
import Footer from './desktop/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App-cfg">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
