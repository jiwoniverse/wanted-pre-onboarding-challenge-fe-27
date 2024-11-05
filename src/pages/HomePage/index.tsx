import { LOCAL_STORAGE_KEY } from "@/constants";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
	return token ? <Navigate to="/todo" /> : <Navigate to="/auth/login" />;
};

export default HomePage;
