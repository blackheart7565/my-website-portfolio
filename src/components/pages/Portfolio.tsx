import React from 'react';

interface IPortfolio { }

const Portfolio: React.FC<IPortfolio> = () => {
	return (
		<>
			<div
				className="h-screen w-full bg-cover"
				style={{
					// backgroundImage: "url(img/middle.jpg)"
				}}
			>

			</div>
		</>
	);
};

export default Portfolio;