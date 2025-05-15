import { useCart } from "./CartProvider";
import "../style/Cart.sass";
import { useParams, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalPagar = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <div className="cart-card">
      <div className="sub-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          style={{ marginLeft: "10px" }}
        >
          ⬅️ Volver
        </button>
        <h2>Carrito</h2>
        <h3 className="total-final">Por pagar: ${totalPagar.toFixed(2)}</h3>
      </div>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="cart-card-container">
          {cartItems.map((item) => (
            <div key={item.id} className="card-grid">
              <div className="image-rating-price-container">
                <img
                  src={
                    item.image && item.image.startsWith("http")
                      ? item.image
                      : `https://via.placeholder.com/300/92c952?text=Producto`
                  }
                  alt={item.title}
                  className="product-imagen"
                />
                <div className="product-rating">
                  <div className="rating-container">
                    <span className="">⭐ {item.rating?.rate}</span>
                    <span className="rating-number">
                      ({item.rating?.count})
                    </span>
                  </div>
                  <p className="product-price">
                    ${parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="product-information">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">
                  {item.description?.substring(0, 240)}
                  {item.description?.length > 100 ? "..." : ""}
                </p>

                <div className="product-quantity">
                  <div className="quantity-container">
                    <strong>Cantidad:</strong>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      style={{ margin: "0 8px" }}
                    >
                      ➖
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{ margin: "0 8px" }}
                    >
                      ➕
                    </button>
                  </div>
                  <p className="total-pay">
                    Total: $
                    {(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="product-actions">
                  <button
                    className="remove-from-cart-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️ Eliminar
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
