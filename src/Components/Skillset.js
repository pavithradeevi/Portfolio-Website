import React from 'react';
import "./Skillset.css";
import skill from "../assets/skill.png"
import LinearProgress from "@material-ui/core/LinearProgress";



const Skillset = () => {
  return (
    <div className="skillContainer" id="skills">
      <div className="skillContainer_image">
        <img src={skill} alt=""/>
      </div>

      <div className="skillContainer_text">
        <h2>SKILLSET</h2>

      <div className="skillContainer__skillSet">
          <h4>React Js</h4>
          <div className="skillContainer__slider skillContainer__slider1">
          <LinearProgress variant="determinate" value={70} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h4>NodeJs</h4>
          <div className="skillContainer__slider skillContainer__slider2">
          <LinearProgress variant="determinate" value={40} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h4>SQL</h4>
          <div className="skillContainer__slider skillContainer__slider3">
          <LinearProgress variant="determinate" value={80} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h4>JavaScript</h4>
          <div className="skillContainer__slider skillContainer__slider4">
          <LinearProgress variant="determinate" value={40} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h4>Python</h4>
          <div className="skillContainer__slider skillContainer__slider5">
          <LinearProgress variant="determinate" value={40} />
          </div>
        </div>

        <div className="skillContainer__skillSet">
          <h4>Digital Marketing</h4>
          <div className="skillContainer__slider skillContainer__slider6">
          <LinearProgress variant="determinate" value={60} />
          </div>
        </div>



      </div>
      
      
    </div>
  )
}

export default Skillset
