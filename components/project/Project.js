import React from "react";
import "./article.css";
import Image from "next/image";
import { imgUrlFor } from "@/sanity/client";

const Project = ({ project }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <Image
          width={200}
          height={200}
          src={imgUrlFor(project.image)}
          alt={`${project.name}_image`}
        />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>{project.description}</h3>
        </div>
        <p>Lire l'article complet</p>
      </div>
    </div>
  );
};

export default Project;
