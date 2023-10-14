'use client'

import React from 'react'
import './brand.css'
import javascript from 'public/assets/javascript.png'
import css from'/public/assets/css.png'
import redux from'public/assets/redux.png'
import figma from'public/assets/figma.png'
import graphql from 'public/assets/graphql.png'
import node from 'public/assets/node.png'
import react from 'public/assets/react.png'
import sass from 'public/assets/sass.png'
import python from 'public/assets/python.png'
import Image from "next/image";


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <Image 
        src={javascript}
        alt='google'
        width={200}
        height={200}
        />
      </div>
      <div>
        <Image 
        src={python}
        alt='google'
        width={200}
        height={200}
        />
      </div>
      <div>
        <Image 
        src={css} 
        alt='slack'
        width={200}
        height={200}
        />
      </div>
     
      <div>
        <Image 
        src={redux} 
        alt='atlassian'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image 
        src={figma} 
        alt='dropbox'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image 
        src={node} 
        alt='dropbox'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image 
        src={react} 
        alt='dropbox'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image src={graphql} alt='shopify'/>
      </div>

    </div>
  )
}

export default Brand

