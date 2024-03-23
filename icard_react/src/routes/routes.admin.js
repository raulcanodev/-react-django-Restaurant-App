import { AdminLayout } from "../layouts";

import { LoginAdmin } from "../pages/Admin";

const routesAdmin = [
	{
		path: "/admin",
		component: LoginAdmin,
		layout: AdminLayout,
		exact: true,
	},
];

export default routesAdmin;
