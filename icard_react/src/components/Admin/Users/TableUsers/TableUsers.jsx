import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

export function TableUsers({ users }) {
	return (
		<Table className="table-users-admin">
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Username</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>Lastname</Table.HeaderCell>
					<Table.HeaderCell>Active</Table.HeaderCell>
					<Table.HeaderCell>Staff</Table.HeaderCell>
					<Table.HeaderCell></Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{map(users, (user, index) => (
					<Table.Row key={index}>
						<Table.Cell>{user.username}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.first_name}</Table.Cell>
						<Table.Cell>{user.last_name}</Table.Cell>
						<Table.Cell>Active</Table.Cell>
						<Table.Cell>Staff</Table.Cell>
						<Table.Cell>Actions</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
}
