import React from "react";

const testimonials = ["Elizabeth", "Tomiwa", "Amanda"];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        See what students are saying about CampusTask
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map((name, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-700">
              "{name} helped me assemble a bookshelf quickly and was super polite. CampusTask made it really easy to connect!"
            </p>
            <p className="mt-2 text-xs text-gray-500">- {name}, University of Lagos</p>
          </div>
        ))}
      </div>
    </section>
  );
}
