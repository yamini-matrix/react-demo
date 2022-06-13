import React from 'react';
import logo from '../logo.svg';
import TopNav from '../components/TopNav';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <div className='top-nav'><TopNav></TopNav></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello Yamini</h3>
      </header>
    </div>
  );
}

export default Home;
