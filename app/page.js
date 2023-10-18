import React from "react";
import { getAllProjects, getAllTechnos, getAllUsers, getOneUser } from "@/sanity/utils";
import { Projects, Brand, ContactUs, Possibility, Header, Whatgpt3 } from "@/components";
// import './globals.css'

async function App() {
  const projects = await getAllProjects();
  const technos = await getAllTechnos();

  return (
    <div className="App">
      <div className="gradient__bg">
      <Header />
      </div>
      <Brand technos={technos} />
      <Whatgpt3/>

      <Possibility />
      <ContactUs />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
