import "./TableProductAdmin.scss";
import { Table, Icon, Image, Button } from "semantic-ui-react";
import { map } from "lodash";

export function TableProductAdmin({ products }) {
	return (
		<>
			<Table className="table-product-admin">
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Image</Table.HeaderCell>
						<Table.HeaderCell>Product</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell>Active</Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{map(products, (product) => (
						<Table.Row key={product.id}>
							<Table.Cell width={2}>
								<Image src={product.imagen} />
							</Table.Cell>
							<Table.Cell>{product.title}</Table.Cell>
							<Table.Cell>${product.price}</Table.Cell>
							<Table.Cell>
								{product.category_data.title}
							</Table.Cell>
							<Table.Cell>
								{product.active ? (
									<Icon name="check" color="green" />
								) : (
									<Icon name="cancel" color="red" />
								)}
							</Table.Cell>

							<Table.Cell textAlign="right">
								<Button
									icon
									onClick={() => console.log("edit")}>
									<Icon name="pencil" />
								</Button>
								<Button
									icon
									color="red"
									negative
									onClick={() => console.log("delete")}>
									<Icon name="close" />
								</Button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</>
	);
}
