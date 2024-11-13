import { useNavigate } from "react-router-dom";
import { useState, useTransition } from "react";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema } from "@/schema/auth";
import { signUp } from "@/services/authService";

import { Card, Button, Fieldset, Input, Stack, Heading } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Alert } from "@/components/ui/alert";
import * as S from "./styles";

const SignUpForm = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const methods = useForm<z.infer<typeof SignUpSchema>>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
		setError("");

		startTransition(() => {
			signUp(values).then((data) => {
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
						<Heading>회원가입</Heading>
					</Fieldset.Legend>
					<Fieldset.HelperText>가입하고 더 많은 혜택을 살펴보세요.</Fieldset.HelperText>
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
								placeholder="비밀번호는 8자 이상으로 설정해주세요."
								type="password"
							/>
						</Field>
						<Alert status="error" title={error} />
						<Button type="submit" disabled={!methods.formState.isValid || isPending} width="full">
							회원가입
						</Button>
					</S.Form>
				</FormProvider>
			</Fieldset.Root>
			<Card.Footer padding="0">
				<Button onClick={() => navigate("/auth/login")} variant="plain">
					이미 가입되어 있으신가요?
				</Button>
			</Card.Footer>
		</Card.Root>
	);
};

export default SignUpForm;
