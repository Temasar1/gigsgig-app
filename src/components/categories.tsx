import React from "react";

const categories = [
  "Assembly",
  "Cleaning",
  "Moving",
  "Tutoring",
  "Grocery Runs",
  "Tech Help"
];

export default function Categories() {
  return (
    <section className="py-14 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
        Explore Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-green-500 transition duration-300 ease-in-out cursor-pointer"
          >
            <span className="text-base font-medium text-gray-700 hover:text-green-600 transition">
              {category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
