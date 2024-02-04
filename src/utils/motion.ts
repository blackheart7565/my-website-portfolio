
export const motionOption = {
	hidden: "hidden",
	visible: "visible",
}

export const headerTitleVariant = {
	hidden: {
		x: "-100%",
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: "0%",
		opacity: 1,
		transition: {
			delay: custom * 0.1,
		}
	})
}
