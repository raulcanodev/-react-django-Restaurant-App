import "./AddEditUserForm.scss";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function AddEditUserForm() {
	const formik = useFormik({
		initialValues: initValues(),
		validationSchema: Yup.object(newValidation()),
		validateOnChange: false,
		onSubmit: (formValue) => {
			console.log("form enviado");
			console.log(formValue);
		},
	});
	return (
		<Form onSubmit={formik.handleSubmit} className="add-edit-user-form">
			<Form.Input
				name="username"
				placeholder="Username"
				value={formik.values.username}
				onChange={formik.handleChange}
				error={formik.errors.username}></Form.Input>
			<Form.Input
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.errors.email}
				name="email"
				placeholder="Email"></Form.Input>
			<Form.Input
				value={formik.values.first_name}
				onChange={formik.handleChange}
				error={formik.errors.first_name}
				name="first_name"
				placeholder="Name"></Form.Input>
			<Form.Input
				name="last_name"
				placeholder="Last Name"
				value={formik.values.last_name}
				onChange={formik.handleChange}
				error={formik.errors.last_name}></Form.Input>
			<Form.Input
				name="password"
				placeholder="Password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				error={formik.errors.password}></Form.Input>

			<div className="add-edit-user-form__active">
				<Checkbox
					toggle
					checked={formik.values.is_active}
					onChange={(_, data) => {
						formik.setFieldValue("is_active", data.checked);
					}}
				/>
				User active
			</div>
			<div className="add-edit-user-form__staff">
				<Checkbox
					toggle
					checked={formik.values.is_staff}
					onChange={(_, data) => {
						formik.setFieldValue("is_staff", data.checked);
					}}
				/>{" "}
				User administrador
			</div>
			<Button type="submit" content="Create" primary fluid />
		</Form>
	);
}

function initValues() {
	return {
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		is_active: true,
		is_staff: false,
		password: "",
	};
}

function newValidation() {
	return {
		username: Yup.string().required(true),
		email: Yup.string().email(true).required(true),
		first_name: Yup.string(),
		last_name: Yup.string(),
		is_active: Yup.bool().required(true),
		is_staff: Yup.bool().required(true),
		password: Yup.string().required(true),
	};
}
