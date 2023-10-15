import React from 'react'
import './cta.css'
import contact from 'public/assets/contact.png';
import Image from "next/image";




const cta = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="possibility">
      <div className=" flex flex-row justify-evenly ">
        <div className="max-w-sm  p-4 rounded-md shadow-lg">
          <h1 className="text-xl font-semibold gradient__text mb-2">
            Formulaire de contact
          </h1>
          <form method="post  ">
            <div className="mb-3 ">
              <label
                for="email"
                class="block text-gray-300 text-sm font-medium mb-2"
              >
                Adresse électronique:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-1 mt-1">
              <label
                for="phone"
                class="block text-gray-300 text-sm font-medium mb-2"
              >
                Téléphone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="w-full py-2 px-3 border rounded-md"
              />
            </div>
            <div className="mb-3">
              <label
                for="summary"
                class="block text-gray-300 text-sm font-medium mb-2"
              >
                Résumé:
              </label>
              <textarea
                id="summary"
                name="summary"
                rows="3"
                class="w-full py-2 px-3 border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="">
          <Image 
          src={contact} 
          alt="possibility"
           width={400} 
           height={400}
            />
        </div>
      </div>


    </div>
  );
};

export default cta;
