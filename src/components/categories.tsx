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
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {categories.map((category) => (
          <div
            key={category}
            className="border rounded-lg p-4 hover:shadow-md hover:border-green-500 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
