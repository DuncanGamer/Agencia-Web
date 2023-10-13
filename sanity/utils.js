import { groq } from "next-sanity";
import { sanityClient } from "./client";

export async function getAllProjects() {
  const query = groq`*[_type == 'projects']`;
  const res = await sanityClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res
}
export async function getAllCustomers() {
  const query = groq`*[_type == 'customers']`;
  const res = await sanityClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res
}
