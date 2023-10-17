import React from "react";
import { getAllCustomers, getAllProjects, getAllTechnos } from "@/sanity/utils";
import { Projects, Brand, ContactUs, Possibility, Header, Whatgpt3,Blog } from "@/components";
// import './globals.css'

async function App() {
  const customers = await getAllCustomers();
  const projects = await getAllProjects();
  const technos = await getAllTechnos();

  return (
    <div className="App">
      <div className="gradient__bg">
      <Header />
      </div>
      <Brand technos={technos} />
      <Whatgpt3/>
      {/* <Blog/> */}
      <Possibility />
      <ContactUs />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
