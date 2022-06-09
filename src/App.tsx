import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Tick from './Components/Tick';
import Login from './LoginForm/Login';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Notion from './Pages/Notion';
import Reports from './Pages/Reports';
import Suport from './Pages/Suport';
import Team from './Pages/Team';
import Register from './LoginForm/Register'


function App() {

  return (
    <BrowserRouter>

    <div className="App">
      <Header />
      <Switch>
      <Route path ='/crong-blog' exact component={Home}/>
      <Route path ='/reports' component={Reports}/>
      <Route path ='/notion' component={Notion}/>
      <Route path ='/team' component={Team}/>
      <Route path ='/messages' component={Messages}/>
      <Route path ='/suport' component={Suport}/>
      <Route path ='/login' component={Login}/>
      <Route path ='/register' component={Register}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
