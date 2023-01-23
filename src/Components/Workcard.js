import "./Workcard.css";
// import { NavLink } from "react-router-dom";
import React from 'react';
// import ProjectcardData from "./Workdata";

const Workcard = (props) => {
  return (
    <div className="project-card">
                

                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                    {/* <a
              href={ProjectcardData.view}
              key={ProjectcardData.imgsrc}
              className="sm:w-1/2 w-100 p-4">
                <span>View</span>
              </a> */}



                        {/* <NavLink to={props.view} target="_blank" className="btn">View</NavLink>  */}
                        <a
                          href={props.frontend}
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
                        {/* <NavLink to={props.source} className="btn">Source</NavLink> */}


                    </div>

                </div>

            </div>
  )
}

export default Workcard
