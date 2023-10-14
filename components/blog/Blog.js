'use client'

import React from 'react'
import blog01 from '/public/assets/blog01.png'
import blog02 from '/public/assets/blog01.png'
import blog03 from '/public/assets/blog01.png'
import blog04 from '/public/assets/blog01.png'
import blog05 from '/public/assets/blog01.png'
import blog06 from '/public/assets/blog01.png'
import  './blog.css'
import Article from '../../components/article/Article';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Voici un échantillon  <br />de nos travaux les plus intéressants.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 et Open AI sont l'avenir. Explorons comment c'est?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 et Open AI sont l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 et Open AI sont l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 et Open AI sont l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 et Open AI sont l'avenir. Explorons comment c'est?" />
      </div>
    </div>
  </div>
  )
}

export default Blog