import React from 'react';
import AboutMe from "../model/AboutMe";
import Header from "../model/Header";

interface IPortfolio { }

const Portfolio: React.FC<IPortfolio> = () => {
	return (
		<>
			<Header />
			<AboutMe />
		</>
	);
};

export default Portfolio;