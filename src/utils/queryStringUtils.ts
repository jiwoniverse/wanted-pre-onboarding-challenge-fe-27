export const getQueryStringValues = <T>(queryString: string): T => {
	const params = Object.fromEntries(new URLSearchParams(queryString)) as Record<string, unknown>;
	return params as T;
};

export const createQueryString = (params: Record<string, unknown>): string => {
	const searchParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined && value !== "" && value !== null) {
			searchParams.set(key, value.toString());
		}
	});
	return searchParams.toString();
};
