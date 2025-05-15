import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import "../style/ProductList.sass";
import Swal from "sweetalert2";
import "../style/DetalleProducto.sass";

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  const confirmarAgregarAlCarrito = (producto) => {
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
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(producto);
        Swal.fire({
          title: "¡Agregado!",
          text: "El producto ha sido agregado al carrito.",
          icon: "success",
          timer: 1000,
          showConfirmButton: false,
        });
      }
    });
  };

  // Cargar categorías
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categorias) => setCategorias(categorias))
      .catch((error) =>
        console.error("Error al cargar categorías:", error)
      );
  }, []);

  // Cargar productos (por categoría)
  useEffect(() => {
    setCargando(true);
    const url =
      categoriaSeleccionada === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${categoriaSeleccionada}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        if (Array.isArray(datos)) {
          setProductos(datos);
        } else {
          console.error("La respuesta no es un array:", datos);
          setError("Formato de datos incorrecto");
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, [categoriaSeleccionada]);

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
        <button onClick={() => window.location.reload()}>
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="product-list">
      <div className="category-filter">
        <h2 className="product-list-title">Nuestros Productos</h2>
        <div>
          <label htmlFor="categoria">Filtrar por categoría:</label>
          <select
            id="categoria"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            <option value="all">Todas</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {productos.length === 0 ? (
        <p className="no-products">
          No hay productos disponibles en este momento.
        </p>
      ) : (
        <div className="products-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="product-card">
              <div className="sup-card">
                <img
                  src={
                    producto.image && producto.image.startsWith("https")
                      ? producto.image
                      : `https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`
                  }
                  alt={producto.title || "Producto"}
                  className="product-image"
                />

                <div className="product-rating">
                  <div className="rating-container">
                    <span className="rating-stars">
                      ⭐{producto.rating?.rate}
                    </span>
                    <span className="rating-number">
                      ({producto.rating?.count})
                    </span>
                  </div>
                  <p className="product-price">
                    ${parseFloat(producto.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">
                  {producto.title?.substring(0, 60)}
                  {producto.title?.length > 60 ? "..." : ""}
                </h3>
                <div className="product-actions">
                  <button
                    className="view-details-button"
                    onClick={() => navigate(`/productos/${producto.id}`)}
                  >
                    Ver detalles
                  </button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => confirmarAgregarAlCarrito(producto)}
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
