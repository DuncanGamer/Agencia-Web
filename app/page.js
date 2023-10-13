import React from "react";
import { Blog, Brand, Cta, Possibility, Header } from "/components";
import { getAllCustomers, getAllProjects } from "@/sanity/utils";
// import './globals.css'

async function App() {
  const customers = await getAllCustomers();
  const projects = await getAllProjects();

  console.log(customers, projects)

  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      {/* <Whatgpt3/> */}

      <Possibility />
      <Cta />
      <Blog />
    </div>
  );
}

export default App;
