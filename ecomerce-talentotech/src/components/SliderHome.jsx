import React, { useState, useEffect } from "react";
import { useCart } from "./CartProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/SliderHome.sass'
function SliderHome(){
    const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 9); // Top 10 por mejor rating
        setProductos(topRated);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setError("No se pudieron cargar los productos destacados.");
        setCargando(false);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  if (cargando) return <p>Cargando productos destacados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la tienda</h1>

      <section className="slider-section">
        <h2>Productos Destacados</h2>
        <Slider {...sliderSettings}>
          {productos.map((producto) => (
            <div key={producto.id} className="slider-item">
              <img
                src={producto.image}
                alt={producto.title}
                className="slider-image"
              />
              <div className="slider-info">
                <div className="price-rating">
                    <p><strong>Price:</strong> ${producto.price.toFixed(2)}</p>
                    <p><strong>Rating:</strong> ⭐ {producto.rating.rate}</p>
                </div>
                <div className="title-description">
                    <h3>{producto.title}</h3>
                    <p>{producto.description.substring(0, 200)}...</p>
                    <button onClick={() => addToCart(producto)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default SliderHome