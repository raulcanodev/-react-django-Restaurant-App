import "./AddEditCategoryForm.scss";
import { Form, Image, Button } from "semantic-ui-react";

export function AddEditCategoryForm() {
	return (
		<>
			<Form className="add-edit-category-form">
				<Form.Input name="title" placeholder="Category name" />
				<Button type="button" fluid>
					Upload image
				</Button>
				<Button type="submit" content="Create" primary fluid></Button>
			</Form>
		</>
	);
}
