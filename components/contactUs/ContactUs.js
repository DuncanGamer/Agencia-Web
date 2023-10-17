"use client";
import React, { useState } from "react";
import contact from "public/assets/contact.png";
import Image from "next/image";
import { sanityClient } from "@/sanity/client";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    title: "",
    body: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { firstname, lastname, email, phone, title, body } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const req = {
      _type: "customerRequests",
      cName: firstname,
      cLastname: lastname,
      cPhone: phone,
      cEmail: email,
      requestTitle: title,
      requestBody: body,
    };
    const response = await fetch("/api/sanity/message", {
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
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className=" bg-footer flex flex-row justify-evenly section__margin "
      id="contactUs"
    >
      {!isSubmitted ? (
        <div className="max-w-md mx-auto p-4 rounded-md shadow-lg">
          <h1 className="text-xl font-semibold gradient__text mb-2">
            Formulaire de contact
          </h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <div className="mb-3">
                <label
                  htmlFor="lastname"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Votre Nom*
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={handleChangeInput}
                  required
                  className="w-full py-2 px-3 border rounded-md"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="firstname"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Votre Prénom*
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={handleChangeInput}
                  required
                  className="w-full py-2 px-3 border rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Adresse électronique*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  required
                  className="w-full py-2 px-3 border rounded-md"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChangeInput}
                  className="w-full py-2 px-3 border rounded-md"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Sujet*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleChangeInput}
                rows="3"
                className="w-full py-2 px-3 border rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="body"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Votre Message*
              </label>
              <textarea
                id="body"
                name="body"
                value={body}
                onChange={handleChangeInput}
                rows="3"
                className="w-full py-2 px-3 border rounded-md"
                placeholder="Décrire notre tache..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      ) : (
        <div className=" text-gray-300 text-lg font-medium mx-auto my-auto">
          <h3>{`Merci, ${firstname} ${lastname}, pour nous contacter!`}</h3>
        </div>
      )}
      <div className="">
        <Image src={contact} alt="possibility" width={400} height={400} />
      </div>
    </div>
  );
};

export default ContactUs;
