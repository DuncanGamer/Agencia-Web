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

const schemas = [projects, customers];

export default schemas;
