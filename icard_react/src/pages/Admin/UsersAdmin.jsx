import { useEffect } from "react";
import { useUser } from "../../hooks";
import { Loader } from "semantic-ui-react";
import { HeadePage, TableUsers } from "../../components/Admin/";

export function UsersAdmin() {
	const { loading, users, getUsers } = useUser();
	// console.log(loading);
	console.log(users);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<HeadePage title="Usuarios" btnTitle="New user"></HeadePage>
			{loading ? (
				<Loader active inline="centered"></Loader>
			) : (
				<TableUsers users={users}></TableUsers>
			)}
		</>
	);
}
