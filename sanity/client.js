import SanityClient from "next-sanity-client";
import urlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_EDITOR_TOKEN;

export const nextSanityClient = new SanityClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false,
});

export const sanityClient = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2022-03-25",
  useCdn: false,
  token: token,
});

const imageBuilder = urlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const imgUrlFor = (source) => imageBuilder.image(source).url();
