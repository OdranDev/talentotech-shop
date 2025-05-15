import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';
import { useAuth } from './AuthProvider'; // 👈 importar autenticación
import '../style/NavBar.css';

function NavBar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, logout } = useAuth(); // 👈 usar autenticación
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // o a "/" si prefieres
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TalentoTech Shop</Link>
      </div>

      <ul className="navbar-link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Products</Link></li>
        <li><Link to="/categorias">Categories</Link></li>
      </ul>

      <div className="navbar-actions">
        <a href="/search" className="search-icon">🔍</a>
        <a href="/profile" className="profile-icon">👤</a>
        <Link to="/cart" className="cart-icon">
          🛒<span className="cart-count">{totalItems}</span>
        </Link>

        {isAuthenticated && (
          <button onClick={handleLogout} className="logout-button">
            🔓 Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
