import Layout from "../components/Layout";
import PageNotFound from "../components/pages/PageNotFound";
import Portfolio from "../components/pages/Portfolio";

export interface IRoutesLayout {
	id: number;
	index?: boolean | undefined;
	path: string;
	element: React.ReactNode;
	children?: IRoutesLayout[] | undefined;
}

export const routesLayout: IRoutesLayout[] = [
	{
		id: 1,
		path: "/",
		element: <Layout />,
		children: [
			{
				id: 1,
				index: true,
				path: "",
				element: <Portfolio />,
			}
		]
	}, {
		id: 2,
		path: "/*",
		element: <PageNotFound />
	}
]