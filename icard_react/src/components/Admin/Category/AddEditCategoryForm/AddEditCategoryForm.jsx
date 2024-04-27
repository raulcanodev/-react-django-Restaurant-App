import "./AddEditCategoryForm.scss";
import { Form, Button, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";

export function AddEditCategoryForm() {
	const [previewImage, setPreviewImage] = useState(null);
	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		setPreviewImage(URL.createObjectURL(file));
		console.log("file", file);
		console.log("url", URL.createObjectURL(file));
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		multiple: false,
		noKeyboard: true,
		onDrop,
	});

	return (
		<>
			<Form className="add-edit-category-form">
				<Form.Input name="title" placeholder="Category name" />
				<Button type="button" fluid {...getRootProps()}>
					Upload image
				</Button>
				<input {...getInputProps()} />
				<Image src={previewImage} fluid />
				<Button type="submit" content="Create" primary fluid></Button>
			</Form>
		</>
	);
}
