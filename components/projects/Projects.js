import React from 'react'
import  './blog.css'
import Project from '../project/Project';

const Projects = ({projects}) => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Voici un échantillon  <br />de nos travaux les plus intéressants.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Project project={projects[0]}  />
      </div>
      <div className="gpt3__blog-container_groupB">
        {projects && projects.map(project => (
          <Project key={project._id} project={project}  />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects