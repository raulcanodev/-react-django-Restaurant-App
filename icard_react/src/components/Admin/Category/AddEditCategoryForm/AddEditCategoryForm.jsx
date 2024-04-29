import "./AddEditCategoryForm.scss";
import { Form, Button, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useCallback } from "react";
import { useCategory } from "../../../../hooks";

export function AddEditCategoryForm({ onClose, onRefetch }) {
	const [previewImage, setPreviewImage] = useState(null);
	const { addCategory } = useCategory();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(newSchema()),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				await addCategory(formValue);
				onRefetch();
				onClose();
			} catch (error) {
				console.error(error);
			}
		},
	});

	const onDrop = useCallback(async (acceptedFiles) => {
		const file = acceptedFiles[0];
		await formik.setFieldValue("image", file);
		setPreviewImage(URL.createObjectURL(file));
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		multiple: false,
		noKeyboard: true,
		onDrop,
	});

	return (
		<>
			<Form
				onSubmit={formik.handleSubmit}
				className="add-edit-category-form">
				<Form.Input
					value={formik.values.title}
					onChange={formik.handleChange}
					error={formik.errors.title}
					name="title"
					placeholder="Category name"
				/>
				<Button
					type="button"
					fluid
					{...getRootProps()}
					color={formik.errors.image && "red"}>
					Upload image
				</Button>

				<input {...getInputProps()} />
				<Image src={previewImage} fluid />

				<Button type="submit" content="Create" primary fluid></Button>
			</Form>
		</>
	);
}

// This function is used to initialize the form values Formik
function initialValues() {
	return {
		title: "",
		image: "",
	};
}

// This function is used to validate the form
function newSchema() {
	return {
		title: Yup.string().required(true),
		image: Yup.string().required(true),
	};
}
