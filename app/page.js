


import React from 'react'
import {Blog, Brand,Cta, Possibility, Header, Whatgpt3} from '/components';
// import './globals.css'

function App() {
  return (
    <div className='App' >
      <div className='gradient__bg'>
     
      <Header/>
      </div>
      <Brand/>
     {/* <Whatgpt3/> */}
      
      <Possibility/>
      <Cta/>
      <Blog/>
     
    </div>
  );
}

export default App;

