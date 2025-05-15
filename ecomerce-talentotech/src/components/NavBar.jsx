import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartProvider';
import '../style/NavBar.css';

function NavBar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((err) => console.error("Error cargando categorías", err));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TalentoTech Shop</Link>
      </div>
      <ul className="navbar-link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productos">Products</Link></li>

        {/* <li className="dropdown">
          <span>Categorías ▾</span>
          <ul className="dropdown-menu">
            {categorias.map((cat) => (
              <li key={cat}>
                <Link to={`/categorias/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </li> */}
      </ul>

      <div className="navbar-actions">
        <Link to="/search" className="search-icon">🔍</Link>
        {/* <Link to="/profile" className="profile-icon">👤</Link> */}
        <Link to="/cart" className="cart-icon">
          🛒<span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;