import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";
import { PATH } from "@/constants/path";

const HomePage = () => {
	return isAuthenticated() ? <Navigate to={PATH.TODO} /> : <Navigate to={PATH.LOGIN} />;
};

export default HomePage;
