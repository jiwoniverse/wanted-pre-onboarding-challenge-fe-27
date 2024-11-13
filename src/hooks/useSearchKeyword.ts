import { useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export const useSearchKeyword = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const { register, watch } = useForm<{ keyword: string }>();
	const keyword = watch("keyword");
	const debouncedKeyword = useDebounce(keyword, 500);

	useEffect(() => {
		if (debouncedKeyword) {
			searchParams.set("keyword", debouncedKeyword);
		} else {
			searchParams.delete("keyword");
		}
		setSearchParams(searchParams);
	}, [debouncedKeyword, setSearchParams, searchParams]);

	return {
		register,
		debouncedKeyword,
	};
};
