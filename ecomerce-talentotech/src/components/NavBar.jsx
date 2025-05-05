import { useCart } from './CartProvider';
import '../style/NavBar.css';

function NavBar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">TalentoTech Shop</a>
      </div>
      <ul className="navbar-link">
        <li><a href="/">Home</a></li>
        <li><a href="/productos">Products</a></li>
        <li><a href="/categorias">Categories</a></li>
        <li><a href="/ofertas">Offer</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="/search" className="search-icon">🔍</a>
        <a href="/profile" className="profile-icon">👤</a>
        <a href="/cart" className="cart-icon">
          🛒<span className="cart-count">{totalItems}</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
