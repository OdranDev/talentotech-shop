import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import Swal from "sweetalert2";
import "../style/DetalleProducto.sass";

function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const confirmarAgregarAlCarrito = () => {
    Swal.fire({
      title: "¿Agregar al carrito?",
      text: "¿Deseas agregar este producto a tu carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, agregar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(producto);
        Swal.fire({
          title: "¡Agregado!",
          text: "El producto ha sido agregado al carrito.",
          icon: "success",
          timer: 1000,
          showConfirmButton: false
        });
      }
    });
  };

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-producto-container">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ marginLeft: "10px" }}
      >
        ⬅️ Volver
      </button>
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
          <p><strong>Categoría:</strong> {producto.category}</p>
          <p className="product-description">{producto.description}</p>

          <div className="product-actions">
            <button
              className="go-to-products-button"
              onClick={() => navigate("/productos")}
              style={{ marginLeft: "10px" }}
            >
              Ver más Productos
            </button>

            <button
              className="add-to-cart-button"
              onClick={confirmarAgregarAlCarrito}
            >
              Agregar al carrito 🛒
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
