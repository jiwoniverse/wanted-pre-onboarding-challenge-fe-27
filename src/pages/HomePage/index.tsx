import { Navigate } from "react-router-dom";
import { PATH } from "@/constants/path";

const HomePage = () => {
	return <Navigate to={PATH.TODO} />;
};

export default HomePage;
