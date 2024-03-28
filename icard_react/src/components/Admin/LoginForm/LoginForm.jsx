import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";

export const LoginForm = () => {
	const formik = useFormik({
		initialValues: initialValues(),
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: validationSchema(),
	});

	return (
		<form className="login-form-admin" onSubmit={formik.handleSubmit}>
			<Form.Input
				name="email"
				placeholder="Email"
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.errors.email}
				fluid
			/>

			<Form.Input
				name="password"
				placeholder="Password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.errors.password}
				fluid
			/>
			<Button type="submit" content="Login" primary fluid />
		</form>
	);
};

function initialValues() {
	return {
		email: "",
		password: "",
	};
}

function validationSchema() {
	return Yup.object({
		email: Yup.string().email(true).required(true),
		password: Yup.string().required(true),
	});
}
