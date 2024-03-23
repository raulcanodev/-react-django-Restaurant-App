import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { error404 } from "../pages";
import { BasicLayout } from "../layouts";

// const routes = [routesAdmin, routesClient]; // ❌ [[{}],[{}]]
// const routesCorrect = [...routesAdmin, ...routesClient]; // ✅ [{},{}]

const routes = [
	...routesAdmin,
	...routesClient,
	{
		path: "*",
		component: error404,
		layout: BasicLayout,
		exact: true,
	},
];

export default routes;
