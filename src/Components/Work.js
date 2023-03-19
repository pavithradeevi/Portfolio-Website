import "./Workcard.css";
import Workcard from "./Workcard";
import Workdata from "./Workdata"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <h4 className="user-details">username:test@gmail.com</h4>
        <h4 className="user-details">password:1234567890</h4>
        <div className="project-container">
            {Workdata.map((val,index)=>{
                return(
                    <Workcard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    software={val.software}
                    />
                )
            })}
            

        </div>
        
        
    </div>
  )
}

export default Work;
