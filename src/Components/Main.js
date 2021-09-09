import React, { useState } from 'react';
import '../Styles/main.css';

function Main() {
    var currentDate = ("08/26/2021");
    var DevelopBlog = ("DEVELOPMENT BLOG");
    let [Title, TitleChange] = useState([
        // 1
        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.',
        // 2
        'Component2',
        // 3
        'Component3']);
    // let [Good, GoodChange] = useState(0);


    return (
        <div className="listall">

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                    {/* <span className="good-btn" onClick={() => { GoodChange(Good + 1) }}> 💜 </span> {Good} */}
                </div>
                <h1 className="title-hd">Project1</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                </div>
                <h1 className="title-hd">Project2</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                </div>
                <h1 className="title-hd">Project3</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                </div>
                <h1 className="title-hd">Project4</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                </div>
                <h1 className="title-hd">Project5</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

            <div className="list-box">
                <div className="title">
                    <p className="title-data">{currentDate}</p>
                    <p className="title-text">{DevelopBlog}</p>
                </div>
                <h1 className="title-hd">Project6</h1>
                <h2 className="title-content">{Title[0]}</h2>
            </div>

        </div>
    );
}

export default Main;
