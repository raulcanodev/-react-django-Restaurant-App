import { AdminLayout } from "../layouts";
import { HomeAdmin, UsersAdmin } from "../pages/Admin";

const routesAdmin = [
	{
		path: "/admin",
		component: HomeAdmin,
		layout: AdminLayout,
		exact: true,
	},
	{
		path: "/admin/users",
		layout: AdminLayout,
		component: UsersAdmin,
		exact: true,
	},
];

export default routesAdmin;
