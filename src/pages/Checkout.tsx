import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Generate order number
    const newOrderNumber = `BURGER-${Date.now().toString().slice(-6)}`;
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      setOrderNumber(newOrderNumber);
      clearCart();
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-hamburger-meat mb-4">Order Complete!</h1>
        <p className="text-gray-600 mb-6">Thank you for your order. Your delicious burgers are being prepared!</p>
        <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto">
          <p className="text-sm text-gray-500 mb-2">Order Number</p>
          <p className="font-mono text-xl">{orderNumber}</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-hamburger-meat text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some delicious burgers to proceed to checkout.</p>
        <button
          onClick={() => navigate('/menu')}
          className="bg-hamburger-meat text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-hamburger-meat">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm text-gray-600 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm text-gray-600 mb-1">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm text-gray-600 mb-1">ZIP Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-4">Payment Information</h2>
            <div>
              <label htmlFor="cardNumber" className="block text-sm text-gray-600 mb-1">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  required
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.expiry}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm text-gray-600 mb-1">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  placeholder="123"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full mt-6 py-3 rounded-lg font-semibold text-white transition ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-hamburger-meat hover:bg-orange-800'
              }`}
            >
              {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.customizations && item.customizations.length > 0 && (
                    <p className="text-xs text-gray-500">
                      + {item.customizations.join(', ')}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2">
              <span>Total</span>
              <span className="text-orange-500">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;