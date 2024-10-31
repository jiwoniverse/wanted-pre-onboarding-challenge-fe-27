import { useParams } from "react-router-dom";

import { useGetTodoById } from "@/shared/hooks/queries/useGetTodoById";

import dayjs from "dayjs";

import DeleteTodoModal from "./components/DeleteTodoModal";
import UpdateTodoModal from "./components/UpdateTodoModal";
import { Box, Card, HStack, Text, Em } from "@chakra-ui/react";

const TodoDetailPage = () => {
	const { id } = useParams();
	const { todo } = useGetTodoById(id);

	return todo ? (
		<Box width="100%" height="100%">
			<Card.Root
				width="100%"
				height="full"
				maxHeight="fit-content"
				display="flex"
				alignItems="center"
				padding="4"
				gapY="1"
			>
				<HStack width="full">
					<UpdateTodoModal id={id} todo={todo} />
					<DeleteTodoModal id={id} />
				</HStack>
				<Box paddingY={6} paddingX={2} borderY="1px solid #ddd" width="full">
					<Text textStyle="sm">{todo ? todo.content : "할 일 정보를 불러오는 중입니다..."}</Text>
				</Box>
				<Card.Footer padding={0} paddingTop={4} width="full" display="flex" justifyContent="end">
					<Text textStyle="xs">
						등록 <Em>{dayjs(todo?.createdAt).format("YYYY.MM.DD HH:mm:ss")}</Em>
					</Text>
					<Text textStyle="xs">
						수정 <Em>{dayjs(todo?.updatedAt).format("YYYY.MM.DD HH:mm:ss")}</Em>
					</Text>
				</Card.Footer>
			</Card.Root>
		</Box>
	) : null;
};

export default TodoDetailPage;
