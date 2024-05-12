import React, { useEffect, useState } from "react";
import {
	HeadePage,
	TableProductAdmin,
	AddEditProductForm,
} from "../../components/Admin";
import { useProduct } from "../../hooks";
import { Loader } from "semantic-ui-react";
import { ModalBasic } from "../../components/Common";

export function ProductAdmin() {
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState("");
	const [contentModal, setContentModal] = useState("");

	const { loading, products, getProducts } = useProduct();

	const openCloseModal = () => {
		setShowModal((prev) => !prev);
	};

	const addProduct = () => {
		setTitleModal("New product");
		setContentModal(<AddEditProductForm onClose={openCloseModal} />);
		openCloseModal();
	};

	useEffect(() => {
		getProducts();
	}, []);

	console.log(products);
	return (
		<>
			<HeadePage
				title="Products"
				btnTitle="New product"
				btnClick={addProduct}
			/>
			{loading ? (
				<Loader active inline="centered">
					Loading...
				</Loader>
			) : (
				<TableProductAdmin products={products} />
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
