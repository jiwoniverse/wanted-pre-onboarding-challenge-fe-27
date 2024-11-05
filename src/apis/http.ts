import { LOCAL_STORAGE_KEY } from "@/constants";

// 환경변수화
export const BASE_URL = "http://localhost:8080";

const createPostHeaders = (body: unknown) => {
	if (body instanceof FormData)
		return {
			headers: {
				Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
			},
			body: body,
		};

	return {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
		},
		body: JSON.stringify(body),
	};
};

export const http = {
	get: async <T>(url: RequestInfo | URL): Promise<T> => {
		const response = await fetch(BASE_URL + url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
			},
		});

		if (!response.ok) {
			throw response;
		}

		return response.json();
	},

	post: async (url: RequestInfo | URL, body: unknown) => {
		const response = await fetch(BASE_URL + url, {
			method: "POST",
			...createPostHeaders(body),
		} as unknown as RequestInit);

		if (!response.ok) {
			throw response;
		}

		return response;
	},

	put: async (url: RequestInfo | URL, body: unknown) => {
		const response = await fetch(BASE_URL + url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw response;
		}

		return response;
	},

	patch: async (url: RequestInfo | URL, body: unknown) => {
		const response = await fetch(BASE_URL + url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw response;
		}

		return response;
	},

	delete: async (url: RequestInfo | URL) => {
		const response = await fetch(BASE_URL + url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN)}`,
			},
		});

		if (!response.ok) {
			throw response;
		}

		return response;
	},
};
