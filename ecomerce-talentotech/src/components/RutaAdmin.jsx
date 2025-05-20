import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function RutaAdmin({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
