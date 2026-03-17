import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Burger Bliss</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Crafted with passion, served with love. Experience the perfect bite every time.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/menu"
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Order Now
          </Link>
          <Link
            to="/about"
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">🍔</div>
          <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
          <p className="text-gray-600">
            We source only the freshest produce and premium meats for our burgers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your delicious burgers delivered hot and ready to enjoy.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">
            Committed to sustainable practices and eco-friendly packaging.
          </p>
        </div>
      </section>

      {/* Special Offer */}
      <section className="bg-hamburger-cheese p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-hamburger-meat mb-2">Today's Special!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Get 20% off on all orders above $25 with code: <span className="font-mono bg-gray-200 px-2 py-1 rounded">BLISS20</span>
        </p>
        <Link
          to="/menu"
          className="inline-block bg-hamburger-meat text-white px-6 py-2 rounded-full hover:bg-orange-800 transition"
        >
          Claim Offer
        </Link>
      </section>
    </div>
  );
};

export default Home;