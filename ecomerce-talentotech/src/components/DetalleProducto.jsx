import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/DetalleProducto.sass";

function DetalleProducto() {
  const { id } = useParams();
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
      <h2>Detalle del Producto</h2>
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
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;

