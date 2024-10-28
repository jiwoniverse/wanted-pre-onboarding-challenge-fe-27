import { FaTriangleExclamation } from "react-icons/fa6";
import * as S from "./styles";

interface FormErrorProps {
	message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<S.Container>
			<FaTriangleExclamation className="icon" />
			<p>{message}</p>
		</S.Container>
	);
};
