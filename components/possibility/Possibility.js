import React from 'react'
import  './possibility.css'
import mano2 from 'public/assets/mano2.png';
import Image from "next/image";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <Image 
      src={mano2} 
      alt="possibility"
      width={500} 
      height={300}
      />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Les possibilités sont <br />au-delà de votre imagination.</h1>
      <p> Explorez un monde de possibilités illimitées dans la création web avec nous.</p>
   
    </div>
  </div>
  )
}

export default Possibility