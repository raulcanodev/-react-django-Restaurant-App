import { HeadePage, TableCategoryAdmin } from "../../components/Admin";
import { useCategory } from "../../hooks";
import { useEffect } from "react";
import { Loader } from "semantic-ui-react";
export function CategoriesAdmin() {
	const { loading, categories, getCategories } = useCategory();
	console.log(categories);
	useEffect(() => {
		getCategories();
	}, []);
	return (
		<>
			<HeadePage title="Categories" btnTitle="New category" />
			{loading ? (
				<Loader active inline="centered">
					Loading...
				</Loader>
			) : (
				<TableCategoryAdmin categories={categories} />
			)}
		</>
	);
}
