import { useSearchParams } from "react-router-dom";
import { getQueryStringValues, createQueryString } from "@/utils/queryStringUtils";

export const useQueryStrings = <T extends Record<string, unknown>>() => {
	const [searchParams, setSearchParams] = useSearchParams();
	const params = getQueryStringValues<T>(searchParams.toString());

	const getParams = (): T => {
		return params as T;
	};

	const setParams = (newParams: Partial<T>) => {
		const mergedParams = { ...getParams(), ...newParams };
		const queryString = createQueryString(mergedParams);
		setSearchParams(queryString, { replace: true });
	};

	return { getParams, setParams };
};
