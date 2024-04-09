import React, { createContext, useState, useEffect } from "react";
import { setToken, getToken, removeToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider({ children }) {
	const [auth, setAuth] = useState(undefined);
	const { getME } = useUser();

	useEffect(() => {
		(async () => {
			const token = getToken();
			if (token) {
				const me = await getME(token);
				setAuth({ token, me });
			} else {
				setAuth(null);
			}
			// console.log(token);
		})();
	}, []);

	const login = async (token) => {
		setToken(token);
		const me = await getME(token);
		setAuth({ token, me });
		console.log(me);
	};

	const logout = () => {
		if (auth) {
			removeToken();
			setAuth(null);
		}
	};

	const valueContext = {
		auth,
		login,
		logout,
	};

	if (auth === undefined) return null;

	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}
