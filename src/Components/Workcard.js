import "./Workcard.css";
// import { NavLink } from "react-router-dom";
import React from 'react';
// import ProjectcardData from "./Workdata";

const Workcard = (props) => {
  return (
    <div className="project-card">
                

                <img className="image" src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                
                <div className="pro-details">
                    <p>{props.text}</p>
                    <h3 className="project-software">Domain: {props.software}</h3>
                    
                    <div className="pro-btns">
                   
                        <a
                          href={props.source}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                          
                        >
                        
                          Frontend
                        </a>
                        <a
                          href={props.backend}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                          
                        >
                        
                          Backend
                        </a>
                        
                        <a
                          href={props.view}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                          
                        >
                          Deployment
                        </a>
                        
                        


                    </div>
                    
                    
                </div>

            </div>
  )
}

export default Workcard
