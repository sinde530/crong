import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Notion from './Pages/Notion';
import Reports from './Pages/Reports';



function App() {

  return (
    <BrowserRouter>

    <div className="App">
      <Header />
      <Switch>
      <Route path ='/' exact component={Home}/>
      <Route path ='/reports' component={Reports}/>
      <Route path ='/notion' component={Notion}/>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
