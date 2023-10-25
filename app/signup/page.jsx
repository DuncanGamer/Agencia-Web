"use client";
import { getOneUserByEmail } from "@/sanity/utils";
import { passwordEncription } from "@/utils/passwordEncryption";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    enterprise: "",
    password: "",
  });
  const { firstname, lastname, email, phone, enterprise, password } = formData;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    error && setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkUser = await getOneUserByEmail(email);
    const hashedPassword = await passwordEncription(password)
    if (checkUser) {
      setError(true);
      return;
    }
    const req = {
      _type: "user",
      name: `${firstname} ${lastname}`,
      role: "USER",
      email: email,
      phone: phone,
      enterprise: enterprise,
      password: hashedPassword,
      createdByCredentials: true,
    };
    const response = await fetch("/api/sanity/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    if (!response.ok) {
      console.error("Error response from server:", response.statusText);
      return;
    } else {
      toast.success(`Votre acompte est créé`);
      router.replace(process.env.NEXT_PUBLIC_BASE_URL);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 justify-center items-center w-full sm:w-1/2 lg:w-1/3 mx-auto my-10 p-5 text-black bg-slate-300"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold mb-2">
        Formulaire de l'inscription
      </h1>
      {error && (
        <p className="text-red-600 font-semibold">
          User est déjà existe, choisissez l'autre email
        </p>
      )}
      <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="firstname">
            Votre nom*
          </label>
          <input
            className="w-full py-2 px-3 border rounded-md"
            id="lastname"
            name="lastname"
            value={lastname}
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-base font-medium" htmlFor="lastname">
            Votre prénom*
          </label>
          <input
            className="w-full py-2 px-3 border rounded-md"
            id="firstname"
            name="firstname"
            value={firstname}
            type="text"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
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
          <label className="text-base font-medium" htmlFor="phone">
            Votre téléphone
          </label>
          <input
            className="w-full py-2 px-3 border rounded-md"
            id="phone"
            name="phone"
            value={phone}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-base font-medium" htmlFor="enterprise">
          Votre entreprise
        </label>
        <input
          className="w-full py-2 px-3 border rounded-md"
          id="enterprise"
          name="enterprise"
          value={enterprise}
          type="text"
          onChange={handleChange}
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
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Signup;
