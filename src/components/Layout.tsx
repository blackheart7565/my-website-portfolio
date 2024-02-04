import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./model/Header";
import NavBar from "./model/NavBar";

interface ILayout { }

const Layout: React.FC<ILayout> = () => {
	return (
		<>
			<NavBar />
			<Header />
			<main
				className="
				"
			>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;