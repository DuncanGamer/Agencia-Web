

import React from 'react'
import {Footer, Blog, Brand,Cta, Possibility, Features, Header} from '/components';
import './globals.css'

function App() {
  return (
    <div className='App' >
      <div className='gradient__bg'>
     
      <Header/>
      </div>
      <Brand/>
      {/* <WhatGPT3/> */}
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

