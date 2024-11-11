import { accessToken } from "@/lib/auth";

import { Navigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

const SignUpPage = () => {
	return accessToken ? <Navigate to="/" /> : <SignUpForm />;
};

export default SignUpPage;
