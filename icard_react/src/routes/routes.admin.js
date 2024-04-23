import { AdminLayout } from "../layouts";
import { CategoriesAdmin, HomeAdmin, UsersAdmin } from "../pages/Admin";

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
	{
		path: "/admin/categories",
		layout: AdminLayout,
		component: CategoriesAdmin,
		exact: true,
	},
];

export default routesAdmin;
