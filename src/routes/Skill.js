import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Skillset from '../Components/Skillset';


const Skill = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SKILLSET"/>
      <Skillset/>
      
      <Footer/>
    </div>
  )
}

export default Skill;
