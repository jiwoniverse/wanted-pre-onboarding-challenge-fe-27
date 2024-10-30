import { Navigate } from "react-router-dom";

const HomePage = () => {
	const token = localStorage.getItem("access_token");
	return token ? <Navigate to="/todo" /> : <Navigate to="/auth/login" />;
};

export default HomePage;
