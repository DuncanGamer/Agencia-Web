'use client'
import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '/public/assets/logo.svg'
import Image from "next/image";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Menu = ()=>
(  <>
  <p><a href='#home'>Agence web</a></p>
  <p><a href='#wgpt3'>Nos servives</a></p>
  <p><a href='#possibility'>Blog</a></p>
  <p><a href='#features'>Ressources</a></p>
  <p><a href='#Cta'>Contact</a></p>
  </>
  )


const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState (false)


  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <Image src={logo} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Se connecter</p>
        <button 
        type='button'
        onClick={signIn}
        >S'inscrire</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={26} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={26} onClick={()=>setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='gpt3__navbar-menu_container scale-up-center'> 
        <div className='gpt3__navbar-menu_container-links'>
          <Menu/>
          <div className='gpt3__navbar-menu_container-links-sign'>
        <p>Se connecter</p>
        <button 
        type='button'
        onClick={signIn}
        >S'inscrire</button>
      </div>
        </div>
        </div>
      )}

      </div>

    </div>
  )
}

export default Navbar