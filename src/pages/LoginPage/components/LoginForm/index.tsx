import { useNavigate } from "react-router-dom";
import { useState, useTransition } from "react";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schema";
import { login } from "@/lib/auth";

import { Card, Button, Fieldset, Input, Stack, Heading } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Alert } from "@/components/ui/alert";
import * as S from "./styles";

const LoginForm = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const methods = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");

		startTransition(() => {
			login(values).then((data) => {
				if (data.success) {
					navigate("/");
				} else {
					setError(data.error);
				}
			});
		});
	};

	return (
		<Card.Root
			width="100%"
			maxWidth="600px"
			display="flex"
			alignItems="center"
			padding="6"
			gapY="4"
		>
			<Fieldset.Root size="lg" maxW="md">
				<Stack>
					<Fieldset.Legend>
						<Heading>로그인</Heading>
					</Fieldset.Legend>
					<Fieldset.HelperText>로그인하고 더 많은 정보를 확인해보세요.</Fieldset.HelperText>
				</Stack>

				<FormProvider {...methods}>
					<S.Form onSubmit={methods.handleSubmit(onSubmit)}>
						<Field label="이메일">
							<Input
								{...methods.register("email")}
								placeholder="이메일을 입력해주세요."
								type="email"
							/>
						</Field>
						<Field label="비밀번호">
							<Input
								{...methods.register("password")}
								placeholder="비밀번호를 입력해주세요."
								type="password"
							/>
						</Field>
						<Alert status="error" variant="surface" title={error} />
						<Button type="submit" disabled={!methods.formState.isValid || isPending} width="full">
							로그인
						</Button>
					</S.Form>
				</FormProvider>
			</Fieldset.Root>

			<Card.Footer padding="0">
				<Button onClick={() => navigate("/auth/signup")} variant="plain">
					계정이 없으신가요?
				</Button>
			</Card.Footer>
		</Card.Root>
	);
};

export default LoginForm;
