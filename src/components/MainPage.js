import React from "react";
import appdemo from "../assets/appDemo.png";
import "./MainPage.css";

function Main() {
    return (
        <div className="main">
            <div className="main_container">
                <h1>Tinder for food</h1>
                <p>swipe right on your favorite food</p>
                <p>try out new attractive recipes</p>
                <h3>launching 1/2023</h3>
            </div>
            <img src={appdemo} alt="appdemo" className="appDemo"></img>
        </div>
    );
}

export default Main;