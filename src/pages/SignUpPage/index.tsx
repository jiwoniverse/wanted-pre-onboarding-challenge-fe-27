import { LOCAL_STORAGE_KEY } from "@//constants";
import SignUpForm from "./components/SignUpForm";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

	return token ? <Navigate to="/" /> : <SignUpForm />;
};

export default SignUpPage;
