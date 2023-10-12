import React from "react";
import "./header.css";
import people from "public/assets/people.png";
import ai from "public/assets/ai.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everithing joy
          altereation boisterus the attachement. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Addres"></input>
        <button type="button">Get Started</button>
     </div>
      <div className="gpt3__header-content__people">
        <Image 
        src={people} 
        width={500}
      height={500}

        alt="people" />
        <p>1,600 people request acces a visit in las 24 hours</p>
      </div>
      
       </div>
       <div className="gpt3__header-image">
        <Image 
        src={ai} 
        alt="ai"
        width={200}
        height={200} />
      </div>
    </div>
  );
};

export default Header;
