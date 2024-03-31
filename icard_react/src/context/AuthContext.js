import React, { createContext } from "react";

export const AuthContext = createContext({
	auth: undefined,
	login: () => null,
	logout: () => null,
});

export function AuthProvider({ children }) {
	const valueContext = {
		auth: undefined,
		login: () => console.log("Realizando login"),
		logout: () => console.log("Realizando logout"),
	};

	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}
