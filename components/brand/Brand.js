"use client";
import React from "react";
import "./brand.css";
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
