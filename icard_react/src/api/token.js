import { TOKEN } from "../utils/constans";

export function setToken(token) {
	localStorage.setItem(TOKEN, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN);
}
