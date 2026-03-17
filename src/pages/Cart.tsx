import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any delicious burgers yet!</p>
        <Link
          to="/menu"
          className="bg-hamburger-meat text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition"
        >
          Browse Our Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-hamburger-meat">Your Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm underline"
            aria-label="Clear all items from cart"
          >
            Clear Cart
          </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-hamburger-meat">{item.name}</h3>
              {item.customizations && item.customizations.length > 0 && (
                <p className="text-sm text-gray-500">
                  + {item.customizations.join(', ')}
                </p>
              )}
              <p className="text-orange-500 font-medium">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  -
                </button>
                <span className="font-semibold w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <div className="text-right w-20">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-2"
                aria-label={`Remove ${item.name} from cart`}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <div className="flex justify-between text-lg">
          <span>Subtotal:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Delivery:</span>
          <span>Free</span>
        </div>
        <div className="border-t pt-4 flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span className="text-orange-500">${total.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full bg-hamburger-meat text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
        >
          Proceed to Checkout
        </Link>
        <Link
          to="/menu"
          className="block text-center text-gray-600 hover:text-hamburger-meat transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;