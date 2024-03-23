import React from "react";
import "./ClientLayout.scss";

export function ClientLayout({ children }) {
	return (
		<div>
			<h1>Client Layout</h1>
			{children}
		</div>
	);
}
