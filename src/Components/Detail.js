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
          <a href="https://github.com/pavithradeevi?tab=repositories"><span style={{color: '#f64c08'}}> pavithradeevi</span> 
          </a>
          
        </p>
        
      </div>
    </div>
  )
}

export default Detail
