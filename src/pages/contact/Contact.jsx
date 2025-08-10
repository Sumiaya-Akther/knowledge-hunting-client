import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Name, Email, and Message are required!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thanks for contacting us. We’ll get back to you soon.',
      timer: 2000,
      showConfirmButton: false,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-cyan-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Contact Info + Map */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Fill in the form to start a conversation. We usually respond within 24 hours.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-primary text-xl">📍</span>
              <span>9999 KnowledgeHunt Lane, Dhaka</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-xl">📞</span>
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary text-xl">✉️</span>
              <span>contact@knowledgehunt.com</span>
            </li>
          </ul>

          {/* Embedded Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.482865780639!2d90.41251837528258!3d23.804112486611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40a7d12345%3A0x123456789abcdef!2sDhaka!5e0!3m2!1sen!2sbd!4v1691234567890!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
