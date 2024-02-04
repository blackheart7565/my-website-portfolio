import { Route } from "react-router-dom";
import { IRoutesLayout } from "../utils/routs-layout";

class RouterService {
	displayRouters(routers: IRoutesLayout[]) {
		return (
			<>
				{routers.map(route => (
					<Route
						key={route.id}
						path={route.path}
						element={route.element}
					>
						{route.children && route.children.length > 0 && this.displayRouters(route.children)}
					</Route>
				))}
			</>
		);
	}
}

const routerService = new RouterService();
export default routerService;