import React from "react";
import "./HomePageStyle.css";
import BackgroundPic from "./M2.png"
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";

function Home(){
    return(
       <div className="homepage" >
        <h1 className ="firstName"> Angelina </h1>
        <h1 className="secondName" style={{backgroundImage: `url(${bg1})`}}> Pürschel </h1>
            <img src={BackgroundPic} className="BackgroundPic" alt=""></img>
            <div className="brandStatement">
            <h2>Software Developer with <span className="highlight">0</span> years experience</h2>
            </div>

            <div className="colourBlock">
                <h2>Contact Me</h2>
            </div>
        </div>
    )
}


export default Home
