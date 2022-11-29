import "./Workcard.css";
import Workcard from "./Workcard";
import Workdata from "./Workdata"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
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
                    />
                )
            })}
            

        </div>
      
    </div>
  )
}

export default Work;
