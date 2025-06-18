import React from "react";
import Layout from "../../components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen pt-20 px-4 py-12 bg-gradient-to-br from-violet-100 via-white to-violet-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-violet-700 mb-3">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          I’d love to hear from you! Feel free to reach out for any project, collaboration, or just to say hello.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Smaller Contact Form */}
          <form className="bg-white px-6 py-8 rounded-md shadow-md border border-violet-300 space-y-3 max-w-sm w-80 mx-auto">
            <div>
              <label className="block mb-1 text-xs text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-2 py-1 border text-xs border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-2 py-1 border text-xs border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-gray-700 font-medium">Message</label>
              <textarea
                rows="3"
                placeholder="Your message..."
                className="w-full px-2 py-1 border text-xs border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-violet-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-600 text-white text-xs px-3 py-1 rounded hover:bg-violet-700 transition"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700 text-sm max-w-sm mx-auto">
            <div>
              <h3 className="font-semibold text-violet-700 text-sm mb-1">Email</h3>
              <p>
                <a href="mailto:shreyay4060@gmail.com" className="hover:underline">
                  shreyay4060@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-violet-700 text-sm mb-1">Phone</h3>
              <p>
                <a href="tel:8421915279" className="hover:underline">
                  8421915279
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-violet-700 text-sm mb-1">Location</h3>
              <p>Kadepur, Sangli, Maharashtra</p>
            </div>
            <div>
              <h3 className="font-semibold text-violet-700 text-sm mb-1">Socials</h3>
              <p>
                <a
                  href="https://github.com/shreyay4060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:underline"
                >
                  GitHub
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/shreya-yadav-53286028b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
