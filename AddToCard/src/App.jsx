import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import "./App.css"
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const product = {
    id: 1,
    name: "Laptop",
    price: 50000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
      <Navbar />

        {/* PRODUCT SECTION */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Product</h2>

        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-gray-600">₹{product.price}</p>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>

        <hr className="my-6" />

        {/* CART SECTION */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart Items</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
