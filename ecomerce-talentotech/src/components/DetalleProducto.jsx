import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ importamos useNavigate
import { useCart } from "./CartProvider";
import "../style/DetalleProducto.sass";

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ inicializamos navigate
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setError("No se pudo cargar el producto.");
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-producto-container">
      <div className="back-container">
      {/* ✅ Botón para volver atrás */}
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ marginLeft: "10px" }}
      >
        ⬅️ Volver
      </button>
      <h2>Detalle del Producto</h2>
      </div>

      <div className="card-grid">
        <div className="image-rating-price-container">
          <img
            src={
              producto.image?.startsWith("http")
                ? producto.image
                : `https://via.placeholder.com/300/92c952?text=Producto`
            }
            alt={producto.title}
            className="product-imagen"
          />
          <div className="product-rating">
            <div className="rating-container">
              <span>⭐ {producto.rating?.rate}</span>
              <span className="rating-number">({producto.rating?.count})</span>
            </div>
            <p className="product-price">${producto.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="product-information">
          <h3 className="product-title">{producto.title}</h3>
          <p className="product-description">{producto.description}</p>
          <p><strong>Categoría:</strong> {producto.category}</p>

          <div className="product-actions">
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(producto)}
            >
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      </div>
       {/* Botón para ir a la página de productos */}
      <button
        className="go-to-products-button"
        onClick={() => navigate("/productos")}
        style={{ marginLeft: "10px" }}
      >
        Ver Productos
      </button>
    </div>
  );
}

export default DetalleProducto;
