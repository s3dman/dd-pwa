import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Home from "./routes/Home";
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
