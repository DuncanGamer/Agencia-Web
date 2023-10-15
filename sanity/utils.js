import { groq } from "next-sanity";
import { nextSanityClient } from "./client";

export async function getAllProjects() {
  const query = groq`*[_type == 'projects']`;
  const res = await nextSanityClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
export async function getAllCustomers() {
  const query = groq`*[_type == 'customers']`;
  const res = await nextSanityClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });
}
export async function getAllTechnos() {
  const query = groq`*[_type == 'technos']`;
  const res = await nextSanityClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
