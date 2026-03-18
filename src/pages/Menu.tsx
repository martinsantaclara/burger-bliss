import { useState } from "react";
import { useCart } from "../hooks/useCart";

interface Burger {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizationOptions: string[];
}

const burgers: Burger[] = [
  {
    id: "1",
    name: "Classic Bliss",
    description:
      "Our signature beef patty with fresh lettuce, tomato, and special sauce.",
    price: 8.99,
    image: "🍔",
    category: "Beef",
    customizationOptions: ["Extra Cheese", "Bacon", "Jalapenos", "Avocado"],
  },
  {
    id: "2",
    name: "Cheese Lover",
    description:
      "Double cheese patty with cheddar and mozzarella for the ultimate cheese experience.",
    price: 10.99,
    image: "🧀",
    category: "Beef",
    customizationOptions: ["Extra Cheese", "Swiss Cheese", "Pepper Jack"],
  },
  {
    id: "3",
    name: "Veggie Delight",
    description: "Plant-based patty with fresh veggies and vegan mayo.",
    price: 9.99,
    image: "🥗",
    category: "Vegetarian",
    customizationOptions: ["Avocado", "Hummus", "Sprouts", "Vegan Cheese"],
  },
  {
    id: "4",
    name: "Spicy Inferno",
    description: "Hot and spicy beef patty with jalapenos and sriracha mayo.",
    price: 11.99,
    image: "🌶️",
    category: "Spicy",
    customizationOptions: [
      "Extra Jalapenos",
      "Ghost Pepper Sauce",
      "Pepper Jack",
    ],
  },
  {
    id: "5",
    name: "BBQ Bacon",
    description:
      "Smoky BBQ sauce, crispy bacon, and onion rings on a beef patty.",
    price: 12.99,
    image: "🥓",
    category: "Beef",
    customizationOptions: ["Extra Bacon", "Onion Rings", "BBQ Sauce"],
  },
  {
    id: "6",
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms and melted Swiss cheese on a beef patty.",
    price: 11.49,
    image: "🍄",
    category: "Beef",
    customizationOptions: ["Extra Mushrooms", "Swiss Cheese", "Garlic Aioli"],
  },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);
  const [customizations, setCustomizations] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(burgers.map((b) => b.category))];

  const filteredBurgers =
    selectedCategory === "All"
      ? burgers
      : burgers.filter((b) => b.category === selectedCategory);

  const handleAddToCart = (burger: Burger) => {
    const customizedPrice = burger.price + customizations.length * 1.5;
    addToCart({
      id: `${burger.id}-${Date.now()}`,
      name: burger.name,
      price: customizedPrice,
      quantity,
      customizations,
    });
    setSelectedBurger(null);
    setCustomizations([]);
    setQuantity(1);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-hamburger-meat mb-4">
          Our Menu
        </h1>
        <p className="text-gray-600">
          Choose from our delicious selection of gourmet burgers
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === category
                ? "bg-hamburger-meat text-orange-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Burger Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBurgers.map((burger) => (
          <div
            key={burger.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedBurger(burger)}
          >
            <div className="text-6xl text-center py-8 bg-gray-100">
              {burger.image}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-hamburger-meat">
                  {burger.name}
                </h3>
                <span className="text-orange-500 font-bold">
                  ${burger.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{burger.description}</p>
              <div className="mt-3">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600">
                  {burger.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customization Modal */}
      {selectedBurger && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-hamburger-meat">
                {selectedBurger.name}
              </h2>
              <button
                onClick={() => setSelectedBurger(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedBurger.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">
                Customizations ($1.50 each):
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedBurger.customizationOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setCustomizations((prev) =>
                        prev.includes(option)
                          ? prev.filter((c) => c !== option)
                          : [...prev, option],
                      )
                    }
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      customizations.includes(option)
                        ? "bg-hamburger-lettuce text-hamburger-bun"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">
                  Base: ${selectedBurger.price.toFixed(2)}
                  {customizations.length > 0 && (
                    <span>
                      {" "}
                      + ${customizations.length * 1.5} customizations
                    </span>
                  )}
                </div>
                <div className="text-xl font-bold text-orange-500">
                  $
                  {(
                    selectedBurger.price +
                    customizations.length * 1.5 * quantity
                  ).toFixed(2)}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(selectedBurger)}
              className="w-full bg-orange-100 text-hamburger-meat py-3 rounded-lg font-semibold transition hover:bg-hamburger-meat hover:text-white hover:bg-orange-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
