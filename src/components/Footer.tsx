import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const contactInfo = {
    address: '123 Burger Street, Flavor City, FC 12345',
    phone: '(555) 123-4567',
    email: 'hello@burgerbliss.com',
  };

  return (
    <footer className="bg-gray-900 py-8 mt-auto text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-hamburger-bun mb-4">
              Burger Bliss 🍔
            </h3>
            <p className="text-white/80">
              The ultimate burger experience. Fresh ingredients, bold flavors, unforgettable taste.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-hamburger-bun mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white hover:text-hamburger-bun transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-hamburger-bun mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70">
            © 2026 Burger Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
