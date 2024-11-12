import { useParams } from "react-router-dom";

import { useGetTodoById } from "@/hooks/apis/useGetTodoById";

import dayjs from "dayjs";

import { DeleteTodoModal as DeleteTodoModalTriggerButton } from "./components/DeleteTodoModal";
import { UpdateTodoModal as UpdateTodoModalTriggerButton } from "./components/UpdateTodoModal";
import { Box, Card, HStack, VStack, Text, Em, Heading } from "@chakra-ui/react";
import {
	boxStyle,
	cardFooterStyle,
	cardRootStyle,
	footerTextStyle,
	headingStyle,
	hStackStyle,
	textStyle,
	vStackStyle,
} from "./styles";

const TodoDetailPage = () => {
	const { todoId } = useParams();
	const { todo } = useGetTodoById(todoId);

	return todo ? (
		<Box {...boxStyle}>
			<Card.Root {...cardRootStyle}>
				<HStack {...hStackStyle}>
					<UpdateTodoModalTriggerButton id={todoId} todo={todo} />
					<DeleteTodoModalTriggerButton id={todoId} />
				</HStack>
				<VStack {...vStackStyle}>
					<Heading {...headingStyle}>{todo.title}</Heading>
					<Text {...textStyle}>{todo ? todo.content : "할 일 정보를 불러오는 중입니다..."}</Text>
				</VStack>
				<Card.Footer {...cardFooterStyle}>
					<Text {...footerTextStyle}>
						등록 <Em>{dayjs(todo?.createdAt).format("YYYY.MM.DD HH:mm:ss")}</Em>
					</Text>
					<Text {...footerTextStyle}>
						수정 <Em>{dayjs(todo?.updatedAt).format("YYYY.MM.DD HH:mm:ss")}</Em>
					</Text>
				</Card.Footer>
			</Card.Root>
		</Box>
	) : null;
};

export default TodoDetailPage;
