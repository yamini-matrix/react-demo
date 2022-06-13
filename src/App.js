import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path='/Login' element={<Login></Login>} ></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
