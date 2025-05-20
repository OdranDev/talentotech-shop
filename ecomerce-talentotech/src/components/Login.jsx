import { useAuth } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [rol, setRol] = useState("cliente");

  // Ruta donde se redirige luego del login
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
  const fakeUser = {
    nombre: rol === "admin" ? "Admin" : "Cliente",
    rol,
  };

  login(fakeUser);

  // Redirige al panel si es admin, sino a la página anterior o a "/"
  if (rol === "admin") {
    navigate("/admin", { replace: true });
  } else {
    navigate(from, { replace: true });
  }
};
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <label>
        Elegí un rol para simular login:
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <br />
      <button onClick={handleLogin} style={{ marginTop: "1rem" }}>
        Iniciar sesión como {rol}
      </button>
    </div>
  );
}
