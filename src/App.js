import './App.css';
import React from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar />
      <Banner />
      <RowPost />
      <RowPost />
    </div>
  );
}

export default App;
