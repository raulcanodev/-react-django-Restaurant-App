import React, { createContext } from "react";
import { setToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider({ children }) {
	const { getME } = useUser();

	const login = async (token) => {
		setToken(token);
		const me = await getME(token);
		console.log(me);
	};

	const valueContext = {
		auth: undefined,
		login,
		logout: () => console.log("Realizando logout"),
	};

	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}

// 🔴 Minuto 10:15 de la clase
