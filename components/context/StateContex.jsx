"use client";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const { data: session, status } = useSession();

  // useEffect(() => {
  //   console.log('from Context', session, status);
  // }, [session]);

  return <Context.Provider value={{ session, status }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
