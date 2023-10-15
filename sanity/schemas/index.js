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
      to: [{ type: "customers" }],
    },
  ],
};
const customers = {
  name: "customers",
  title: "Customers",
  type: "document",
  fields: [
    {
      name: "contactName",
      title: "Contact Name",
      type: "string",
    },
    {
      name: "customerTitle",
      title: "Customer Title",
      type: "string",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
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

const schemas = [projects, customers, technos, customerRequests];

export default schemas;
