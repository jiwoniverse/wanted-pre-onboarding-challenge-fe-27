import { useDeleteTodo } from "@/hooks/apis/useDeleteTodo";

import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Text } from "@chakra-ui/react";

const DeleteTodoModal = ({ id }: { id?: string }) => {
	const { mutateDeleteTodo } = useDeleteTodo();

	const handleDelete = (id?: string) => {
		if (!id) return;

		mutateDeleteTodo(id);
	};

	return (
		<DialogRoot size="xs" placement="center">
			<DialogTrigger asChild>
				<Button size="xs" variant="plain">
					삭제
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle textStyle="md">할 일 삭제하기</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<Text>정말 삭제하시겠어요?</Text>
				</DialogBody>
				<DialogFooter gapX={2}>
					<DialogActionTrigger asChild>
						<Button size="xs" width={12} variant="outline">
							취소
						</Button>
					</DialogActionTrigger>
					<Button onClick={() => handleDelete(id)} size="xs" width={12}>
						삭제
					</Button>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
};

export default DeleteTodoModal;
