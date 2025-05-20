import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
}
