import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-hamburger-meat mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-green-600 font-semibold">Message sent successfully!</p>
              <p className="text-gray-500">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-600 mb-1">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-hamburger-meat text-white py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Burger Street, Flavor Town, FT 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(555) 123-BURGER</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">hello@burgerbliss.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-hamburger-cheese p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-hamburger-meat mb-2">Follow Us</h2>
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { icon: '📘', name: 'Facebook' },
                { icon: '📸', name: 'Instagram' },
                { icon: '🐦', name: 'Twitter' },
                { icon: '📺', name: 'YouTube' },
              ].map((social) => (
                <button
                  key={social.name}
                  aria-label={`Visit our ${social.name} page`}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl hover:shadow-md transition"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="text-gray-600">Interactive map would go here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;