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
            <p>Hai, I am </p>
            <h4>PAVITHRA</h4>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                {/* <Link><button className="btn">CV</button></Link> */}
                {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
                <a href="https://drive.google.com/file/d/13KszckUigGi-I_hdz7Q8v-oJk-jDYFeq/view?usp=share_link" target="_blank">
                <button className="btn">Download CV</button>
                </a>
                <a href="https://github.com/pavithradeevi" target="_blank">
                <button className="btn">GitHub</button>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Heroimg
