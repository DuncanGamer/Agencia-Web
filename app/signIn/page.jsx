"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RiGoogleFill } from "react-icons/ri";

const SignIn = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    error && setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
      redirect: false,
      email: email,
      password: password,
    });
    if (!res.ok) setError(true);
    else router.replace(res.url);
    toast.success(`Bienvenu!`)
  };

  return (
    <form
      className="flex flex-col gap-3 justify-center items-center w-full sm:w-1/2 lg:w-1/3 mx-auto my-10 p-5 text-black bg-slate-300"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold mb-2">
        Saisissez votre email et mot de passe
      </h1>
      {error && (
        <p className="text-red-600 font-semibold">
          Votre email ou mot de passe est incorrect
        </p>
      )}
      <div className="flex flex-col gap-1 w-full">
        <label className="text-base font-medium" htmlFor="email">
          Votre email*
        </label>
        <input
          className="w-full py-2 px-3 border rounded-md"
          id="email"
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-base font-medium" htmlFor="password">
          Mot de passe*
        </label>
        <input
          className="w-full py-2 px-3 border rounded-md"
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-center items-center gap-5">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() =>
            signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
          }
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <RiGoogleFill size={24}/>
        </button>
      </div>
    </form>
  );
};

export default SignIn;
