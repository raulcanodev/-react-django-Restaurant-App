import React from "react";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import "./AdminLayout.scss";

export function AdminLayout({ children }) {
	const { auth } = useAuth();

	if (!auth) return <LoginAdmin />;

	return (
		<div>
			<h1>Admin Layout</h1>

			{children}
		</div>
	);
}
