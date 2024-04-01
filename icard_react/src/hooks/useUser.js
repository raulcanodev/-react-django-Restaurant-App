import { getMeApi } from "../api/user";

export function useUser() {
	const getME = async (token) => {
		try {
			const response = await getMeApi(token);
			return response;
		} catch (e) {
			throw e;
		}
	};
	return { getME };
}
