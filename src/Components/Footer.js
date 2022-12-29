import "./Footer.css";

import React from 'react';
import {FaHome,FaPhone,FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                    <div>
                        <p>106B,Aswath Nagar,</p>
                        <p>Near Ramaiah College Road,</p>
                        <p>Bangalore-560094</p>
                    </div>

                </div>
                <div className="phone">
                    <h4>

                <FaPhone size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                 8148867175
                    </h4>

                </div>
                <div className="email">
                    <h4>

                <FaMailBulk size={20} style={{color:"whitesmoke",marginRight:"2rem"}}/>
                 pavithradeevi@gmail.com
                    </h4>

                </div>
                

            </div>
            <div className="right">
                <h4>About</h4>
                <p>Passionate Application Engineer,Skilled in Javascript,HTML & CSS,Python and ReactJs.</p>
                {/* <div className="social">
                <FaFacebook size={30} style={{color:"whitesmoke",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"whitesmoke",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"whitesmoke",marginRight:"1rem"}}/>

                </div> */}

            </div>

        </div>
     
    </div>
  )
}

export default Footer
