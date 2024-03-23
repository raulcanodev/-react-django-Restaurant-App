import { ClientLayout } from "../layouts";
import { Home } from "../pages/Client";
import { error404 } from "../pages";

const routesClient = [
	{
		path: "/",
		component: Home,
		layout: ClientLayout,
		exact: true,
	},
	// {
	// 	path: "*",
	// 	component: error404,
	// 	layout: error404,
	// 	exact: true,
	// },
];

export default routesClient;
