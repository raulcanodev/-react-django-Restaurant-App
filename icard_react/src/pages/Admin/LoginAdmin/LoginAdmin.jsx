import React from "react";
import { LoginForm } from "../../../components/Admin";
import "./LoginAdmin.scss";

export const LoginAdmin = () => {
	return (
		<div className="login-admin">
			<div className="login-admin__content">
				<h1>Admin console</h1>
				<LoginForm />
			</div>
		</div>
	);
};
