import React from 'react'
import './feature.css'

const Features = ({title,text}) => {
  return (
    <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h3 className='text-blue-300 font-bold '>{title}</h3>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p className='text-blue-300'>{text}</p>
    </div>
  </div>
  )
}

export default Features