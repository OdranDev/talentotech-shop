import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';
import { useAuth } from './AuthProvider';
import '../style/NavBar.css';

function NavBar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" >
          TalentoTech Shop
        </Link>
      </div>

      <ul className="navbar-link">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
            Products
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/categorias" className={({ isActive }) => isActive ? 'active' : ''}>
            Categories
          </NavLink>
        </li> */}
      </ul>

      <div className="navbar-actions">
        <a href="/search" className="search-icon">🔍</a>
        <NavLink to="/login" className={({ isActive }) => `profile-icon ${isActive ? 'active' : ''}`}>👤</NavLink>
        <NavLink to="/cart" className={({ isActive }) => `cart-icon ${isActive ? 'active' : ''}`}>
          🛒<span className="cart-count">{totalItems}</span>
        </NavLink>

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
