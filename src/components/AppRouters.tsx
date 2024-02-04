import { AnimatePresence } from "framer-motion";
import { Routes, useLocation } from "react-router-dom";
import { useScrollSmooth } from "../hook/scroll-smooth.hook";
import routerService from "../service/RouterService";
import { routesLayout } from "../utils/routs-layout";

interface IAppRouters { }

const AppRouters: React.FC<IAppRouters> = () => {
	const location = useLocation();
	useScrollSmooth();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				{routerService.displayRouters(routesLayout)}
			</Routes>
		</AnimatePresence>
	);
}

export default AppRouters;
