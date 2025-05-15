import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/SliderHome.sass";

function SliderHome() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ✅

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 9);
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
      <section className="slider-section">
        <h2>Productos Destacados</h2>
        <Slider {...sliderSettings}>
          {productos.map((producto) => (
            <div key={producto.id} className="slider-item">
              <div className="card-horizontal">
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
                      <span className="rating-number">
                        ({producto.rating?.count})
                      </span>
                    </div>
                    <p className="product-price">${producto.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="slider-info">
                  <div className="title-description">
                    <h3>{producto.title}</h3>
                    <p>{producto.description.substring(0, 150)}...</p>
                  </div>
                  <button
                    className="ver-detalles-button"
                    onClick={() => navigate(`/productos/${producto.id}`)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  )
}

export default SliderHome;
