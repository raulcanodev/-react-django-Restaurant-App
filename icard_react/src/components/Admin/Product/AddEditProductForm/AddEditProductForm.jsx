import React from "react";
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react";
import "./AddEditProductForm.scss";

export function AddEditProductForm() {
	return (
		<>
			<Form className="add-edit-product-form">
				<Form.Input name="title" placeholder="Product name" />
				<Form.Input
					type="number"
					name="price"
					placeholder="Product name"
				/>
				<Dropdown placeholder="Category" fluid selection search />

				<div className="add-edit-product-form__active">
					<Checkbox toggle />
					Product active
				</div>

				<Button type="button" fluid>
					Upload image
				</Button>
				<Button type="submit" primary fluid content="Create"></Button>
			</Form>
		</>
	);
}
