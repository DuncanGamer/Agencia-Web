'use client'

import React from 'react'
import './brand.css'
import google from 'public/assets/google.png'
import slack from'/public/assets/slack.png'
import atlassian from'public/assets/atlassian.png'
import dropbox from'public/assets/dropbox.png'
import shopify from 'public/assets/shopify.png'
import Image from "next/image";


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <Image 
        src={google} 
        alt='google'
        width={200}
        height={200}
        />
      </div>
      <div>
        <Image 
        src={slack} 
        alt='slack'
        width={200}
        height={200}
        />
      </div>
      <div>
        <Image 
        src={atlassian} 
        alt='atlassian'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image 
        src={dropbox} 
        alt='dropbox'
        width={200}
        height={200}/>
      </div>
      <div>
        <Image src={shopify} alt='shopify'/>
      </div>

    </div>
  )
}

export default Brand

