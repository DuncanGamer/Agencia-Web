
import React from 'react'
import './article.css'
import Image from "next/image";
const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <Image 
      width={200}
      height={200}
      src={imgUrl} 
      alt="blog_image"
       />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Lire l'article complet</p>
    </div>
  </div>
  )
}

export default Article