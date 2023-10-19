import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "8n8yk8j9",
  dataset: "production",
  title: "next-sanity-studio",
  apiVersion: "2023-03-25",
  schema: { types: schemas },
  plugins: [
    deskTool(),
    //to check queries
    visionTool({ defaultApiVersion: "2023-03-25" }),
  ],
  basePath: "/admin",
});

export default config;
