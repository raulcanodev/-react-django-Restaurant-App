import React, { useEffect } from "react";
import { HeadePage, TableProductAdmin } from "../../components/Admin";
import { useProduct } from "../../hooks";
import { Loader } from "semantic-ui-react";

export function ProductAdmin() {
	const { loading, products, getProducts } = useProduct();

	useEffect(() => getProducts(), []);
	console.log(products);
	return (
		<>
			<HeadePage title="Products" btnTitle="New product" />
			{loading ? (
				<Loader active inline="centered">
					Loading...
				</Loader>
			) : (
				<TableProductAdmin products={products} />
			)}
		</>
	);
}
