import { defineConfig} from "sanity";
import { deskTool } from "sanity/desk"; 

const config = defineConfig({

projectId: "8n8yk8j9",
dataset: "production",
title: "next-sanity-studio",
apiVersion: "2023-03-25",
plugins: [deskTool()],
basePath : "/admin",



})

export default config