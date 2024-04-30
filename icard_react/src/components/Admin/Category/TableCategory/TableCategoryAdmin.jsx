import "./TableCategoryAdmin.scss";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

export function TableCategoryAdmin({
	categories,
	updateCategory,
	deleteCategory,
}) {
	return (
		<>
			<Table className="table-category-admin">
				<Table.Header>
					<Table.Row>
						<Table.Cell>Image</Table.Cell>
						<Table.Cell>Category</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{map(categories, (category, index) => (
						<Table.Row key={index}>
							<Table.Cell width={2}>
								<Image src={category.image} />
							</Table.Cell>
							<Table.Cell>{category.title}</Table.Cell>
							<Action
								category={category}
								updateCategory={updateCategory}
								deleteCategory={deleteCategory}></Action>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</>
	);
}

function Action({ category, updateCategory, deleteCategory }) {
	return (
		<>
			<Table.Cell textAlign="right">
				<Button icon onClick={() => updateCategory(category)}>
					<Icon name="pencil"></Icon>
				</Button>
				<Button icon negative>
					<Icon
						name="close"
						onClick={() => {
							deleteCategory(category);
						}}></Icon>
				</Button>
			</Table.Cell>
		</>
	);
}
