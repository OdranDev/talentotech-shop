import { useCart } from "./CartProvider";
import "../style/Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="products-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="product-cart-card">
              <img
                src={
                  item.image && item.image.startsWith("http")
                    ? item.image
                    : `https://via.placeholder.com/300/92c952?text=Producto`
                }
                alt={item.title}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{item.title}</h3>
                <p className="product-price">${parseFloat(item.price).toFixed(2)}</p>
                <p className="product-description">
                  {item.description?.substring(0, 100)}
                  {item.description?.length > 100 ? "..." : ""}
                </p>

                <div className="product-quantity">
                  <strong>Cantidad:</strong>
                  <button onClick={() => decreaseQuantity(item.id)} style={{ margin: '0 8px' }}>➖</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)} style={{ margin: '0 8px' }}>➕</button>
                  <p className="product-total">
                    Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
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



