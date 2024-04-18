import { Children, useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
	HeadePage,
	TableUsers,
	AddEditUserForm,
} from "../../components/Admin/";
import { ModalBasic } from "../../components/Common/";
import { update } from "lodash";

export function UsersAdmin() {
	const [titleModal, setTitleModal] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [contentModal, setContentModal] = useState(null);
	const { loading, users, getUsers, deleteUser } = useUser();
	const [refetch, setRefetch] = useState(false);

	const openCloseModal = () => setShowModal((prev) => !prev);
	const onRefetch = () => setRefetch((prev) => !prev);

	const updateUser = (data) => {
		setTitleModal("Edit user");
		setContentModal(
			<AddEditUserForm
				user={data}
				onClose={openCloseModal}
				onRefetch={onRefetch}
			/>
		);
		openCloseModal();
	};

	const addUser = () => {
		setTitleModal("New user");
		setContentModal(
			<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />
		);
		openCloseModal();
	};

	const onDeleteUser = async (data) => {
		const result = window.confirm(`Remove user? ${data.email}`);
		if (result) {
			try {
				await deleteUser(data.id); //data seria user
				onRefetch();
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		getUsers();
	}, [refetch]);

	return (
		<>
			<HeadePage
				title="Usuarios"
				btnTitle="New user"
				btnClick={addUser}></HeadePage>
			{loading ? (
				<Loader active inline="centered"></Loader>
			) : (
				<TableUsers
					users={users}
					updateUser={updateUser}
					onDeleteUser={onDeleteUser}></TableUsers>
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
