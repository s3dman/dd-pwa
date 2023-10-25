import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Careers from "./routes/Careers";
import Contact from "./routes/Contact";
import NoPage from "./routes/NoPage";
import Project from "./components/Project/Project";

const Layout = () => {
  return (
    <>
      <div className="content">
        <Outlet />
      </div>
      <Navbar />
      <Header dark={false} />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
