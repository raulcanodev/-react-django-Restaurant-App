import { useEffect, useState } from "react";
import {
	HeadePage,
	TableCategoryAdmin,
	AddEditCategoryForm,
} from "../../components/Admin";
import { useCategory } from "../../hooks";
import { Loader } from "semantic-ui-react";
import { ModalBasic } from "../../components/Common";

export function CategoriesAdmin() {
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState(null);
	const [contentModal, setContentModal] = useState(null);
	const { loading, categories, getCategories, deleteCategory } =
		useCategory();

	const [refetch, setRefetch] = useState(false);

	const openCloseModal = () => {
		setShowModal((prev) => !prev);
	};

	const onRefetch = () => {
		setRefetch((prev) => !prev);
	};

	const addCategory = () => {
		setTitleModal("Nueva categoria");
		setContentModal(
			<AddEditCategoryForm
				onClose={openCloseModal}
				onRefetch={onRefetch}
			/>
		);
		openCloseModal();
	};

	const updateCategory = (data) => {
		setTitleModal("Edit category");
		setContentModal(
			<AddEditCategoryForm
				onClose={openCloseModal}
				onRefetch={onRefetch}
				category={data}
			/>
		);
		openCloseModal();
	};

	const onDeleteCategory = async (data) => {
		const result = window.confirm(
			`Are you sure to delete this category ${data.title}?`
		);
		if (result) await deleteCategory(data.id);
		onRefetch();
	};

	useEffect(() => {
		getCategories();
	}, [refetch]);

	return (
		<>
			<HeadePage
				btnClick={addCategory}
				title="Categories"
				btnTitle="New category"
			/>
			{loading ? (
				<Loader active inline="centered">
					Loading...
				</Loader>
			) : (
				<TableCategoryAdmin
					categories={categories}
					updateCategory={updateCategory}
					deleteCategory={onDeleteCategory}
				/>
			)}

			<ModalBasic
				show={showModal}
				onClose={openCloseModal}
				title={titleModal}
				children={contentModal}
			/>
		</>
	);
}
