import { useDeleteTodo } from "@/shared/hooks/queries/useDeleteTodo";

import { Button } from "@/shared/components/ui/button";
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
} from "@/shared/components/ui/dialog";

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
					<p>정말 삭제하시겠어요?</p>
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
