import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          Campus<span className="text-black">Task</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Sign up / Log in</a>
          <a
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
            Become a Tasker
          </a>
        </nav>

        {/* Mobile Menu Placeholder (Optional if you're adding responsiveness) */}
      </div>
    </header>
  );
}
