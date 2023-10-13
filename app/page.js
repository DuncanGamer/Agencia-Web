import React from "react";
import { getAllCustomers, getAllProjects } from "@/sanity/utils";
import { Projects, Brand, Cta, Possibility, Header } from "@/components";
// import './globals.css'

async function App() {
  const customers = await getAllCustomers();
  const projects = await getAllProjects();

  console.log(customers, projects);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      {/* <Whatgpt3/> */}

      <Possibility />
      <Cta />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
