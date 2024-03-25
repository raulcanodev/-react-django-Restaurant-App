import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForm.scss";

export const LoginForm = () => {
	return (
		<form className="login-form-admin">
			<Form.Input name="email" placeholder="Email" fluid />
			<Form.Input
				name="password"
				placeholder="Password"
				type="password"
				fluid
			/>

			<Button type="submit" content="Login" primary fluid />
		</form>
	);
};
