import { useEffect, useState } from "react";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "@//schema";

import { useUpdateTodo } from "@//hooks/queries/useUpdateTodo";
import { TodoItemType } from "@//types";

import { Input, VStack } from "@chakra-ui/react";
import { Button } from "@//components/ui/button";
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
} from "@//components/ui/dialog";

interface UpdateTodoModalProps {
	id?: string;
	todo: TodoItemType;
}

const UpdateTodoModal = ({ id, todo }: UpdateTodoModalProps) => {
	const [open, setOpen] = useState(false);
	const { mutateUpdateTodo } = useUpdateTodo(id);

	const methods = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: {
			title: todo.title,
			content: todo.content,
		},
		mode: "onChange",
	});

	useEffect(() => {
		methods.reset({
			title: todo.title,
			content: todo.content,
		});
	}, [todo, methods]);

	const handleUpdateTodo = async (values: z.infer<typeof TodoSchema>) => {
		if (!id) return;

		const { title, content } = values;

		mutateUpdateTodo({ id, title, content }, { onSuccess: () => setOpen(false) });
	};

	return (
		<DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="xs" placement="center">
			<DialogTrigger asChild>
				<Button size="xs" variant="plain">
					수정
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle textStyle="md">할 일 수정하기</DialogTitle>
				</DialogHeader>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handleUpdateTodo)}>
						<DialogBody>
							<VStack width="100%" gapY={4}>
								<VStack width="100%">
									<Input
										{...methods.register("title")}
										placeholder="할 일 제목"
										variant="flushed"
										autoComplete="off"
									/>
									<Input
										{...methods.register("content")}
										placeholder="할 일 내용"
										variant="flushed"
										autoComplete="off"
									/>
								</VStack>
							</VStack>
						</DialogBody>

						<DialogFooter gapX={2}>
							<DialogActionTrigger asChild>
								<Button size="xs" width={12} variant="outline">
									취소
								</Button>
							</DialogActionTrigger>
							<Button type="submit" size="xs" width={12}>
								수정
							</Button>
						</DialogFooter>
						<DialogCloseTrigger />
					</form>
				</FormProvider>
			</DialogContent>
		</DialogRoot>
	);
};

export default UpdateTodoModal;
