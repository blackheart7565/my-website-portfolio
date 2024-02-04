
const PageNotFound = () => {
	return (
		<div
			className="
				grid place-items-center text-white h-screen
				md:text-[3rem] font-black tracking-widest
			"
		>
			<span
				className="
					text-center md:w-auto w-[12rem]
				"
			>
				Данной страницы
				<span
					className="
					text-red-600
					"
				> не существует!</span>
			</span>
		</div>
	);
};

export default PageNotFound;