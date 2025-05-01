import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-4">Discover</h4>
          <ul className="space-y-2 text-sm">
            <li>Become a Tasker</li>
            <li>Services</li>
            <li>Campus Communities</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Community Guidelines</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} CampusTask. All rights reserved.
      </p>
    </footer>
  );
}
