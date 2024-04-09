import React from "react";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import "./AdminLayout.scss";
import { TopMenu } from "../../components/Admin";

export function AdminLayout({ children }) {
	const { auth } = useAuth();

	if (!auth) return <LoginAdmin />;

	return (
		<div className="admin-layout">
			<div className="admin-layout__menu">
				<TopMenu></TopMenu>
			</div>

			<div className="admin-layout__main-content">{children}</div>
		</div>
	);
}
