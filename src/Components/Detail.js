import React from 'react';
import "./Detail.css";


// import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";


const Detail = () => {
  return (
    <div>
     
      <div className="contact__container">
        <p>Name:
          <span>Pavithra.V</span>
        </p>
        <p>
          Contact Number :
          <span> 8148867175</span>
        </p>
        <p>
          Email : <span>pavithradeevi@gmail.com</span>
        </p>
        <p>Github : 
          <a href="https://github.com/pavithradeevi" target="_blank"><span style={{color: 'skyblue'}}> pavithradeevi</span> 
          </a>
          
        </p>
        <p>Biodata : 
          <a href="https://docs.google.com/document/d/1FMoOUhwQQ2udjLUfyZMI3ikmD2KwAJwgQsV7vwuicdQ/edit?usp=sharing" target="_blank"><span style={{color: 'skyblue'}}> Resume</span> 
          </a>
          
        </p>
        
      </div>
    </div>
  )
}

export default Detail
