import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}
