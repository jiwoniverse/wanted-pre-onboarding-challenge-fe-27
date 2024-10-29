import SignUpForm from "./components/SignUpForm";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
	const token = localStorage.getItem("access_token");

	return token ? <Navigate to="/" /> : <SignUpForm />;
};

export default SignUpPage;
