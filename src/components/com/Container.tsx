import classNames from "classnames";
import React from "react";

interface IContainer {
	className?: string | undefined;
	children?: React.ReactNode | undefined;
}

const Container: React.FC<IContainer> = ({
	children,
	className,
}) => {
	return (
		<div
			className={classNames("max-w-[1440px] m-auto px-5", className)}
		>
			{children}
		</div>
	);
};

export default Container;