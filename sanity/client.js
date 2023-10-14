import SanityClient from "next-sanity-client";
import urlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityClient = new SanityClient({
  projectId: projectId,
  dataset: dataset,
  useCdn: false,
});

const imageBuilder = urlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const imgUrlFor = (source) => imageBuilder.image(source).url()
