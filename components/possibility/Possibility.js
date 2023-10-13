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
      width={200} 
      height={200}
      />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Les possibilités sont au-delà de ton imagination. <br /> au-delà de votre imagination.</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
   
    </div>
  </div>
  )
}

export default Possibility