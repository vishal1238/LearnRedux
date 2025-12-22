import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const product = {
    id: 1,
    name: "Laptop",
    price: 50000
  };

  return (
    <div>
      <h2>Product</h2>
      <p>{product.name} - ₹{product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      <hr />

      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
