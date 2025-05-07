import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        <div>
          <h4 className="font-bold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Become a Tasker</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Campus Communities</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Community Guidelines</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} <strong>CampusTask</strong>. All rights reserved.
      </p>
    </footer>
  );
}
