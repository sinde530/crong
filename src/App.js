import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Home from './Pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
