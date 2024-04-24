import { BASE_API } from "../utils/constans";

export async function getCategoriesApi() {
	try {
		const url = `${BASE_API}/api/categories/`;
		const response = await fetch(url);
		const result = response.json();
		return result;
	} catch (error) {
		throw error;
	}
}
