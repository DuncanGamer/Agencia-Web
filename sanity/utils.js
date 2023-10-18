import { groq } from "next-sanity";
import { sanityFetchClient } from "./client";

export async function getAllProjects() {
  const query = groq`*[_type == 'projects']`;
  const res = await sanityFetchClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
export async function getAllUsers() {
  const query = groq`*[_type == 'user']`;
  const res = await sanityFetchClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
export async function getOneUserByEmail(email) {
  const query = groq`*[_type == 'user' && email == '${email}'][0]`;
  const res = await sanityFetchClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
export async function getOneUserById(email, id) {
  const query = groq`*[_type == 'user' && ${email && `email == '${email}'`} ${id && `id == '${id}'`}][0]`;
  console.log(query)
  const res = await sanityFetchClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
export async function getAllTechnos() {
  const query = groq`*[_type == 'technos']`;
  const res = await sanityFetchClient.fetch({
    query: query,
    config: {
      next: {
        revalidate: 0,
      },
    },
  });

  return res;
}
