import React from "react";

import "./whatGPT3.css";
import Features from "../features/Features";

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Features
          title="What is DigitalToile ?"
          text="DigitalToile est une agence web polyvalente, prête à répondre à l'ensemble de vos besoins. De la communication digitale à la création de sites web, en passant par la publicité en ligne, le référencement SEO, et le design, notre équipe est là pour concrétiser toutes vos idées (numériques) les plus ambitieuses !"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        Vos idées sont la source de nos projets, du simple au complexe. 
        </h1>
       
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features
          title="Conception et Développement Web "
          text="Notre équipe de professionnels passionnés se consacre à donner vie à vos idées en créant des sites web exceptionnels. Nous plaçons l'expérience utilisateur au cœur de notre démarche, garantissant que chaque site que nous développons est à la fois attrayant et fonctionnel."
        />
        <Features
          title="Marketing Digital et Publicité en Ligne"
          text="Grâce à nos stratégies de marketing numérique et à notre expertise en publicité en ligne, nous pouvons augmenter la visibilité de votre entreprise sur le web. Notre objectif est d'attirer un public qualifié et de convertir les visiteurs en clients fidèles. Nous maîtrisons les outils du marketing numérique pour vous aider à atteindre vos objectifs."
        />
        <Features
          title="Gestion de Contenu et Développement de Contenus "
          text=" Le contenu est l'âme de toute présence en ligne. Notre équipe de rédacteurs et de créatifs expérimentés est là pour créer, gérer et optimiser le contenu de votre site web. Que ce soit des articles de blog, des vidéos, des images ou des mises à jour de contenu, nous veillons à ce que votre message soit impactant et à jour pour maintenir l'engagement de votre public"
        />
      </div>
    </div>
  );
};

export default Whatgpt3;
