import { useNavigate } from "react-router-dom";
import { useState, useTransition } from "react";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpSchema } from "@/shared/schema";
import { signUp } from "@/shared/lib/auth";

import { FormError } from "@/pages/LoginPage/components/FormError";
import { Card, Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "@/shared/components/ui/field";
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
					navigate("/todo-list");
				} else {
					setError(data.error);
				}
			});
		});
	};

	return (
		<Card.Root width="600px" display="flex" alignItems="center" padding="6" gapY="4">
			<Fieldset.Root size="lg" maxW="md">
				<Stack>
					<Fieldset.Legend>가입하기</Fieldset.Legend>
					<Fieldset.HelperText>회원가입 후 더 많은 정보를 확인해보세요.</Fieldset.HelperText>
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
						<FormError message={error} />
						<Button
							type="submit"
							disabled={!methods.formState.isValid || isPending}
							width="full"
							marginTop="3"
						>
							회원가입
						</Button>
					</S.Form>
				</FormProvider>
			</Fieldset.Root>
			<Card.Footer padding="0">
				<Button onClick={() => navigate("/login")} variant="plain">
					이미 가입되어 있으신가요?
				</Button>
			</Card.Footer>
		</Card.Root>
	);
};

export default SignUpForm;
