'use client'; // This directive makes the component a Client Component

import { useState } from 'react';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ firstName, lastName, email, phoneNumber, message });
    alert('Form submitted successfully!'); // Using alert for demo, replace with a custom modal
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="min-h-screen text-gray-800">
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12">
          {/* Left Section - Contact Info */}
          <section className="bg-white dark:bg-transparent p-8 rounded-lg">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Email, call, or complete the form to learn how <span className="font-semibold">TappIn</span> can answer your inquiries.
            </p>

            <div className="mb-6">
              <p className="text-gray-800 dark:text-white text-sm font-regular">Help Desk Email</p>
              <p className="text-gray-800 dark:text-white font-semibold">help@tappin.io</p>
            </div>

            <button className="bg-primary dark:bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
              Customer Support
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 text-sm">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Customer Support</h3>
                <p className="text-gray-600">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Feedback and Suggestions</h3>
                <p className="text-gray-600">
                  We value your feedback and are continuously working to improve Snappy. Your input is vital in shaping the future of Snappy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 dark:text-white">Inquiries</h3>
                <p className="text-gray-600">
                  For questions or inquiries, please contact us at <span className="font-semibol dark:text-white">ask@tappin.io</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Right Section - Contact Form */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">You can reach us anytime</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone-number" className="sr-only">Phone number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-100 text-gray-600">
                    +63
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                  <input
                    type="tel"
                    id="phone-number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">How can we help?</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 resize-none"
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500} // Example max length
                  required
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">{message.length}/500</div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Submit
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </section>
        </div>

        {/* Location Section */}
        
      </main>
    </div>
  );
}
