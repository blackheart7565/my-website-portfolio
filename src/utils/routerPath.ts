type TStringNumber = string | number;

export interface INavigation {
	id: TStringNumber;
	path: string;
	text: string;
	tag: string;
}


export const pathEndpoint = {
	home: {
		path: "/",
		tag: "#home",
	},
	about_me: {
		path: "/about-me",
		tag: "#about-me"
	},
	skills: {
		path: "/skills",
		tag: "#skills",
	},
	contacts: {
		path: "/contacts",
		tag: "#contacts",
	},
}

export const navigation: INavigation[] = [
	{
		id: 1,
		path: pathEndpoint.home.path,
		tag: pathEndpoint.home.tag,
		text: "Home",
	},
	{
		id: 2,
		path: pathEndpoint.about_me.path,
		tag: pathEndpoint.about_me.tag,
		text: "About Me",
	},
	{
		id: 3,
		path: pathEndpoint.skills.path,
		tag: pathEndpoint.skills.tag,
		text: "Skills",
	},
	{
		id: 4,
		path: pathEndpoint.contacts.path,
		tag: pathEndpoint.contacts.tag,
		text: "Contact",
	},
]