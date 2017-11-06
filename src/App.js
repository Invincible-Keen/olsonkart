import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
