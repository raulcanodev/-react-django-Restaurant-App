import { Children, useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
	HeadePage,
	TableUsers,
	AddEditUserForm,
} from "../../components/Admin/";
import { ModalBasic } from "../../components/Common/";

export function UsersAdmin() {
	const [titleModal, setTitleModal] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [contentModal, setContentModal] = useState(null);
	const { loading, users, getUsers } = useUser();

	const openCloseModal = () => setShowModal((prev) => !prev);

	const addUser = () => {
		setTitleModal("New user");
		setContentModal(<AddEditUserForm />);
		openCloseModal();
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<HeadePage
				title="Usuarios"
				btnTitle="New user"
				btnClick={addUser}></HeadePage>
			{loading ? (
				<Loader active inline="centered"></Loader>
			) : (
				<TableUsers users={users}></TableUsers>
			)}
			<ModalBasic
				show={showModal}
				title={titleModal}
				onClose={openCloseModal}>
				{contentModal}
			</ModalBasic>
		</>
	);
}
