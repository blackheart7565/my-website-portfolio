import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./model/NavBar";

interface ILayout { }

const Layout: React.FC<ILayout> = () => {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;