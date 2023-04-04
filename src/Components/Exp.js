import React from 'react';
import "./Exp.css";
import ExperienceBox from './ExperienceBox';

const Exp = () => {
  return (
    <div className="experienceContainer" id="exp">
       <h1>Experience</h1>
      <div className="experienceContainer__info">
        
        <ExperienceBox
          number="5+"
          title="Projects"
          
        />
        <ExperienceBox number="2+" title="Years Teaching & Career Counselling" style={{ backgroundColor: "#f64c08" }} />
        <ExperienceBox number="1+" title="Years Freelancer for Application Engineer" />
      </div>
    </div>
  )
}

export default Exp
