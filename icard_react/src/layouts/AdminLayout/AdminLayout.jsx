import React from "react";
import { LoginAdmin } from "../../pages/Admin";
import "./AdminLayout.scss";

export function AdminLayout({ children }) {
	const auth = null;

	if (!auth) return <LoginAdmin />;

	return (
		<div>
			<h1>Admin Layout</h1>
			{children}
		</div>
	);
}
