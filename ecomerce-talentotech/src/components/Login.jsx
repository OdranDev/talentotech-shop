import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/cart"); // redirige después de login
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inicia sesión</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}
