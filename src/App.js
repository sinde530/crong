import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';

function App() {

  return (
    <BrowserRouter>

    <div className="App">
      <Header />
      <Switch>
      <Route path ='/Home' exact component={Home}/>
      <Route path ='/reports' component={Reports}/>
      <Route path ='/products' component={Products}/>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
