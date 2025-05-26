import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ element: Component }) => {
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    if (type === "college") {
      return <Navigate to="/college/signin" replace state={{ from: location }} />;
    } else if (type === "counsellor") {
      return <Navigate to="/counsellor/signin" replace state={{ from: location }} />;
    } else {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
  }

  return <Component />;
};

export default PrivateRoutes;