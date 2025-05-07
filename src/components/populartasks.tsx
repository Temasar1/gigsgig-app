import React from "react";

const tasks = [
  "Furniture Assembly",
  "Academic Help",
  "Delivery Tasks",
  "Room Cleaning",
  "Event Support",
  "Tech Setup",
  "Note Taking",
  "Errands"
];

export default function PopularTasks() {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tasks.map((task) => (
          <div
            key={task}
            className="bg-white border p-4 rounded-lg hover:shadow-lg"
          >
            <h3 className="font-semibold text-lg">{task}</h3>
            <p className="text-sm text-gray-600">Projects starting at ₦500</p>
          </div>
        ))}
      </div>
    </section>
  );
}
