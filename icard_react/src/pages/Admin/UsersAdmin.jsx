import { useEffect } from "react";
import { useUser } from "../../hooks";

export function UsersAdmin() {
	const { loading, users, getUsers } = useUser();
	// console.log(loading);
	console.log(users);

	useEffect(() => {
		getUsers();
	}, []);

	return <div>Users Admin</div>;
}
