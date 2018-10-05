import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Users from './components/Users';
import Chatbox from './components/Chatbox';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Users />
        <Chatbox />
        <Navbar />
      </div>
    );
  }
}

export default App;
