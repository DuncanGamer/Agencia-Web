"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "/public/assets/logo.svg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { getOneUserByEmail } from "@/sanity/utils";
import toast from "react-hot-toast";

const Menu = () => (
  <>
    <p>
      <a href="#home">Agence web</a>
    </p>
    <p>
      <a href="#wgpt3">Nos servives</a>
    </p>
    <p>
      <a href="#possibility">Blog</a>
    </p>
    <p>
      <a href="#features">Ressources</a>
    </p>
    <p>
      <a href="#contactUs">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState();
  const { data: session } = useSession();

  const getUser = async (email) => {
    const user = await getOneUserByEmail(email);
    setUser(user);
  };

  const handleSignOut = () => {
    signOut({redirect: false})
    toast.success('Vous etez deconnecté')
  }

  useEffect(() => {
    getUser(session?.user?.email);
  }, [session]);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <Link className="gpt3__navbar-links_logo" href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        {session?.user && (
          <>
            <Link
              className="px-4 py-2 text-white bg-[#ff4820] rounded-md font-medium text-lg"
              href={`/${user?._id}`}
            >
              Profil
            </Link>
            <button
              className="px-4 py-2 text-white bg-[#ff4820] rounded-md font-medium text-lg"
              type="button"
              onClick={handleSignOut}
            >
              Se deconnecter
            </button>
          </>
        )}
        {!session?.user && (
          <>
            <Link
              className="px-4 py-2 text-white text-center bg-[#ff4820] rounded-md font-medium text-lg"
              href='/signIn'
            >
              Se connecter
            </Link>
            <Link
              className="px-4 py-2 text-white bg-[#ff4820] rounded-md font-medium text-lg"
              type="button"
              href="/signup"
            >
              S'inscrire
            </Link>
          </>
        )}
      </div>
      {/* <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Se connecter</p>
                <button type="button" onClick={signIn}>
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
