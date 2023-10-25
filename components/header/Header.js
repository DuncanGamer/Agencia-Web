import React from "react";
import "./header.css";
import people from "public/assets/people.png";
import headerpick from "public/assets/headerpick.png";

import Image from "next/image";
import exito from "public/assets/exito.jpg";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">L'agence digital DigitalToile</h1>
        <p>
          Chez DigitalToile, nous sommes bien plus qu'une simple agence web.
          Nous sommes vos partenaires dans la communication digitale, la
          création de sites web, les publicités en ligne, le référencement SEO
          et le design.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Addres"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <Image src={people} width={500} height={500} alt="people" />
          <p>1,600 people request acces a visit in las 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <Image src={exito} alt="product" width={1500} height={1500} />
      </div>
    </div>
  );
};

export default Header;
