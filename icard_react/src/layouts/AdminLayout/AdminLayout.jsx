import React from "react";

import "./AdminLayout.scss";

export function AdminLayout({ children }) {
	return (
		<div>
			<h1>Admin Layout</h1>
			{children}
		</div>
	);
}
