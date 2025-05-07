import React from "react";

const testimonials = [
  {
    name: "Elizabeth",
    quote: "Elizabeth helped me assemble a bookshelf quickly and was super polite. CampusTask made it really easy to connect!",
  },
  {
    name: "Tomiwa",
    quote: "Tomiwa assisted with my laundry and was extremely efficient. I’ll definitely use CampusTask again!",
  },
  {
    name: "Amanda",
    quote: "Amanda cleaned my room and it looked spotless. Amazing experience using CampusTask!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800 leading-snug">
        See what students are saying<br />about <span className="text-green-600">CampusTask</span>
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${t.name}&background=10B981&color=ffffff&size=64`}
                alt={`${t.name}'s avatar`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500">University of Lagos</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
