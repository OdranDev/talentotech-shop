import React, { useState, useEffect } from 'react';
import { useCart } from './CartProvider';
import '../style/productList.css';

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // usa el hook

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  useEffect(() => {
    fetch('https://6810f73727f2fdac2413830b.mockapi.io/products')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (Array.isArray(datos)) {
          setProductos(datos);
        } else {
          console.error('La respuesta no es un array:', datos);
          setError('Formato de datos incorrecto');
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()}>Intentar de nuevo</button>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Nuestros Productos</h2>

      {productos.length === 0 ? (
        <p className="no-products">No hay productos disponibles en este momento.</p>
      ) : (
        <div className="products-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="product-card">
              <img 
                src={
                  producto.image && producto.image.startsWith('http')
                    ? producto.image
                    : `https://via.placeholder.com/300/92c952?text=${producto.image}`
                }
                alt={producto.name || "Producto"}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{producto.name}</h3>
                <p className="product-price">
                  ${parseFloat(producto.price).toFixed(2)}
                </p>
                <p className="product-description">
                  {producto.description?.substring(0, 100)}
                  {producto.description?.length > 100 ? '...' : ''}
                </p>
                <div className="product-actions">
                  <button className="view-details-button">Ver detalles</button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(producto)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
