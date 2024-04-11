import { getMeApi, getUserApi } from "../api/user";
import { useState } from "react";
import { useAuth } from ".";

export function useUser() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [users, setUsers] = useState(null);
	const { auth } = useAuth();

	const getME = async (token) => {
		try {
			const response = await getMeApi(token);
			return response;
		} catch (e) {
			throw e;
		}
	};

	const getUsers = async () => {
		try {
			setLoading(true);
			const response = await getUserApi(auth.token);
			setLoading(false);
			setUsers(response);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	return { loading, error, users, getME, getUsers };
}
