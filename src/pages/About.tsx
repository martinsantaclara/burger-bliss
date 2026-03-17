const About = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-hamburger-meat mb-4">About Burger Bliss</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're passionate about crafting the perfect burger experience. From our carefully selected ingredients to our unique recipes, every bite tells a story.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-hamburger-meat mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Burger Bliss started as a small food truck with a big dream: to create burgers that make people smile.
          </p>
          <p className="text-gray-600">
            Today, we've grown to multiple locations, but we've never compromised on quality. Every burger is still made with the same love and attention to detail as our very first one.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-hamburger-meat mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To serve delicious, high-quality burgers that bring joy to our community while being environmentally conscious and supporting local suppliers.
          </p>
          <p className="text-gray-600">
            We believe that great food should be accessible to everyone, which is why we offer a variety of options including vegetarian and vegan choices.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-hamburger-meat mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <div className="text-3xl mb-2">👨‍🍳</div>
            <h3 className="font-semibold mb-1">Expert Chefs</h3>
            <p className="text-sm text-gray-600">Trained professionals crafting your burger</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🌿</div>
            <h3 className="font-semibold mb-1">Fresh Ingredients</h3>
            <p className="text-sm text-gray-600">Locally sourced, always fresh</p>
          </div>
          <div>
            <div className="text-3xl mb-2">❤️</div>
            <h3 className="font-semibold mb-1">Made with Love</h3>
            <p className="text-sm text-gray-600">Every burger is a labor of love</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold text-hamburger-meat mb-4">Our Team</h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {[
            { name: 'Chef Mario', role: 'Head Chef' },
            { name: 'Chef Sofia', role: 'Head Chef' },
            { name: 'Chef Alex', role: 'Head Chef' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-20 h-20 bg-hamburger-bun rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                👨‍🍳
              </div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;