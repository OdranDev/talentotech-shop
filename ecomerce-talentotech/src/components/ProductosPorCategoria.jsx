import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartProvider";
import Swal from "sweetalert2";

function ProductosPorCategoria() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoria}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos por categoría", err);
        setLoading(false);
      });
  }, [categoria]);

  const handleAddToCart = (producto) => {
    Swal.fire({
      title: "¿Agregar al carrito?",
      text: "¿Deseas agregar este producto a tu carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        addToCart(producto);
        Swal.fire("Agregado", "El producto fue agregado", "success");
      }
    });
  };

  if (loading) return <p>Cargando productos de {categoria}...</p>;

  return (
    <div>
      <h2>Productos de la categoría: {categoria}</h2>
      <div className="products-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <img src={producto.image} alt={producto.title} width="100" />
            <h4>{producto.title}</h4>
            <p>${producto.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(producto)}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosPorCategoria;
