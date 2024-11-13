import { UseFormRegisterReturn } from "react-hook-form";

import { Input, HStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps {
	register: UseFormRegisterReturn;
	placeholder?: string;
}

const SearchInput = ({ register, placeholder = "검색어를 입력하세요" }: SearchInputProps) => {
	return (
		<HStack width="100%">
			<IoSearchOutline size="20px" color="gray" />
			<Input {...register} placeholder={placeholder} autoComplete="off" variant="flushed" />
		</HStack>
	);
};

export default SearchInput;
