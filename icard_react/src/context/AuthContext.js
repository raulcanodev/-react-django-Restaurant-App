import React, { createContext, useState } from "react";
import { setToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider({ children }) {
	const { getME } = useUser();
	const [auth, setAuth] = useState(undefined);

	const login = async (token) => {
		setToken(token);
		const me = await getME(token);
		setAuth({ token, me });
		console.log(me);
	};

	const valueContext = {
		auth,
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
