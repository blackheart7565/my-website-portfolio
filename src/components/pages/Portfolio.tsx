import React from 'react';
import AboutMe from "../model/AboutMe";
import Header from "../model/Header";
import Skills from "../model/Skills";

interface IPortfolio { }

const Portfolio: React.FC<IPortfolio> = () => {
	return (
		<>
			<Header />
			<AboutMe />
			<Skills />
		</>
	);
};

export default Portfolio;