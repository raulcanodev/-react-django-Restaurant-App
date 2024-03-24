import { AdminLayout } from "../layouts";
import { HomeAdmin } from "../pages/Admin";

const routesAdmin = [
	{
		path: "/admin",
		component: HomeAdmin,
		layout: AdminLayout,
		exact: true,
	},
];

export default routesAdmin;
