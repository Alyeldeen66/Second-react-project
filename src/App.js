
import './App.css';
import img from "./og-learning-path-react.jpg";
import React from "react";
import videoButter from "./butterfly_flower_insect_nature_515.mp4";


function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100 vh"}}>
      <h1 className="title red">Your name here</h1>
      <div>
      <img style={{width:"600px",height:"200px"}}src={img}></img> 
      </div>
      <div>
      <img style={{width:"600px",height:"200px"}}src="/reactt-light_1200x628.png"></img>
      </div>   
      <video controls style={{width:"600px",height:"200px"}}src={videoButter} type="video/mp4"></video>
    </div>
  );
}

export default App;
