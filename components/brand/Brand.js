"use client";

import React from "react";
import "./brand.css";
import javascript from "public/assets/javascript.png";
import css from "/public/assets/css.png";
import redux from "public/assets/redux.png";
import figma from "public/assets/figma.png";
import graphql from "public/assets/graphql.png";
import node from "public/assets/node.png";
import react from "public/assets/react.png";
import sass from "public/assets/sass.png";
import python from "public/assets/python.png";
import Image from "next/image";
import { imgUrlFor } from "@/sanity/client";

const Brand = ({ technos }) => {
  return (
    <div className="gpt3__brand section__padding">
      {technos &&
        technos.map((techno) => (
          <div key={techno._id}>
            <Image
              src={imgUrlFor(techno.image)}
              alt={`${techno.name}_logo`}
              width={200}
              height={200}
            />
          </div>
        ))}
    </div>
  );
};

export default Brand;
