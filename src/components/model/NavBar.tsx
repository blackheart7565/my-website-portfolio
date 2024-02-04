import React, { useState } from 'react';
import { Link } from "react-router-dom";

import classNames from "classnames";
import { INavigation, navigation, pathEndpoint } from "../../utils/routerPath";
import Container from "../com/Container";
import Logo from "./Logo";

interface INavBar { }

const NavBar: React.FC<INavBar> = () => {
	const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState<boolean>(false);

	const handleActiveBurgerMenu = (): void =>
		setIsActiveBurgerMenu(!isActiveBurgerMenu);

	return (
		<div
			className="
				w-full h-[65px] fixed top-0 
				shadow-lg shadow-[#2E50B2] z-[1000]
				backdrop-blur-md
				px-3
				md:px-10
			"
		>
			<Container
				className="
					px-2 md:px-5 h-full w-full 
					flex items-center
					justify-between
					md:justify-start
				"
			>
				<Link
					className="
						flex 
						items-center 
						gap-2
						md:mr-[5rem]
						lg:mr-64
					"
					to={pathEndpoint.home.path}
				>
					<Logo />
					<span
						className="
							text-2xl lg:text-3xl text-[#89CFF2] uppercase
							font-bold
						"
					>
						Portfolio
					</span>
				</Link>

				<ul
					className="
						md:flex text-white gap-2 hidden
					"
				>
					{navigation.map((nav: INavigation) => (
						<Link
							key={nav.id}
							to={nav.path}
							className="
								nav-item
								text-[1.1rem] lg:text-[1.3rem]
								px-3 leading-[2.5rem] relative
							"
						>
							{nav.text}
						</Link>
					))}
				</ul>

				<button
					className={classNames("burger-btn bg-blue-1100 md:hidden shadow-burgerMenuBtn", {
						"active": isActiveBurgerMenu
					})}
					onClick={handleActiveBurgerMenu}
				>
					<span></span>
				</button>
			</Container>
		</div>
	);
};

export default NavBar;