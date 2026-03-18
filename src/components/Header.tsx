import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-hamburger-bun shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-hamburger-meat hover:text-orange-700 transition">
          Burger Bliss 🍔
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative px-3 py-2 rounded-md transition ${
                  location.pathname === link.to
                    ? 'text-orange-700'
                    : 'text-hamburger-meat hover:text-orange-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-orange-700 transform origin-left transition-transform duration-300 ${
                    location.pathname === link.to ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/cart"
              className="px-3 py-2 bg-hamburger-lettuce text-white rounded-md hover:bg-green-700 transition flex items-center space-x-1"
            >
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;