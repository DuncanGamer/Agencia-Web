const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
const users = {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "enterprise",
      title: "Enterprise",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "createdByCredentials",
      title: "Created By Credentials",
      type: "boolean",
    },
  ],
};
const technos = {
  name: "technos",
  title: "Technos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
const customerRequests = {
  name: "customerRequests",
  title: "Customer Requests",
  type: "document",
  fields: [
    {
      name: "requestTitle",
      title: "Title",
      type: "string",
    },
    {
      name: "requestBody",
      title: "Body",
      type: "string",
    },
    {
      name: "cName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "cLastname",
      title: "Customer Lastname",
      type: "string",
    },
    {
      name: "cPhone",
      title: "Customer Phone",
      type: "string",
    },
    {
      name: "cEmail",
      title: "Customer Email",
      type: "string",
    },
  ],
};

const schemas = [projects, users, technos, customerRequests];

export default schemas;
