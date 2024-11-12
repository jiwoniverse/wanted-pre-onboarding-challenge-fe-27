import { useCreateTodo } from "@/hooks/queries/useCreateTodo";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoSchema } from "@/schema/todo";

import PriorityRadioGroup from "@/components/todo/PriorityRadioGroup";
import { Button, Input, VStack } from "@chakra-ui/react";

const AddTodoForm = () => {
	const { mutateCreateTodo } = useCreateTodo();

	const methods = useForm<z.infer<typeof TodoSchema>>({
		resolver: zodResolver(TodoSchema),
		defaultValues: {
			title: "",
			content: "",
			priority: "normal",
		},
		mode: "onChange",
	});

	const onSubmit = async (values: z.infer<typeof TodoSchema>) => {
		console.log("Form values on submit:", values);
		mutateCreateTodo(values, {
			onSuccess: () => {
				methods.reset({
					title: "",
					content: "",
					priority: "normal",
				});
			},
		});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<VStack
					width="100%"
					gapY={4}
					padding={6}
					borderWidth="1px"
					borderRadius={10}
					borderColor="gray.200"
				>
					<VStack width="100%" gapY={4} alignItems="start">
						<PriorityRadioGroup name="priority" />

						<VStack width="100%" gapY={2}>
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
					<Button type="submit" size="sm" variant="outline" width="100%">
						할 일 추가
					</Button>
				</VStack>
			</form>
		</FormProvider>
	);
};

export default AddTodoForm;
