import "./Heroimg.css";

import React from 'react';
import wall  from "../assets/wall.webp";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={wall} alt="wall"/>

        </div>
        <div className="content">
            <p>Hai, I am a </p>
            <h4>PAVITHRA</h4>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
                <a href="https://drive.google.com/file/d/1TqWU3x15OfM12Q4mLt_Ve_mgsxkItews/view?usp=share_link">
                <button className="btn">Download CV</button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Heroimg
