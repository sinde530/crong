import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  var currentDate = ("08/26/2021");
  var DevelopBlog = ("DEVELOPMENT BLOG");
  let [Title, TitleChange] = useState([
    // 1
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.',
    // 2
    'Component2',
    // 3
    'Component3']);
  let [Good, GoodChange] = useState(0);


  return (

    <div className="App">
      <Header />

      <div className="listall">
        <div className="list-box">
          <div className="title">
            <p className="title-data">{currentDate}</p>
            <p className="title-text">{DevelopBlog}</p>
          </div>
          <h2 className="title-content">{Title[0]}</h2>
          <span className="good-btn" onClick={() => { GoodChange(Good + 1) }}> 💜 </span> {Good}
        </div>

        <div className="list-box">
          <p>{currentDate}</p>
          <h2>{Title[1]}</h2>
          <span onClick={() => { GoodChange(Good + 1) }}> 💜 </span> {Good}
        </div>

        <div className="list-box">
          <p>{currentDate}</p>
          <h2>{Title[2]}</h2>
          <span onClick={() => { GoodChange(Good + 1) }}> 💜 </span> {Good}
        </div>

        <Footer/>

      </div>
    </div>
  );
}

export default App;
