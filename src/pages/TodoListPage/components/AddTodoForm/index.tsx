import { useCreateTodo } from "@/shared/hooks/queries/useCreateTodo";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "@/shared/schema";

import { Button, Input, VStack } from "@chakra-ui/react";

const AddTodoForm = () => {
	const { mutateCreateTodo } = useCreateTodo();

	const methods = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: {
			title: "",
			content: "",
		},
		mode: "onChange",
	});

	const onSubmit = async (values: z.infer<typeof TodoSchema>) => {
		mutateCreateTodo(values, {
			onSuccess: () => {
				methods.reset({
					title: "",
					content: "",
				});
			},
		});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
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
					<Button type="submit" size="sm" variant="outline" width="100%">
						할 일 추가
					</Button>
				</VStack>
			</form>
		</FormProvider>
	);
};

export default AddTodoForm;
