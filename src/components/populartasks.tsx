import React from "react";

const tasks = [
  { name: "Furniture Assembly", icon: "🛠️", popular: true },
  { name: "Academic Help", icon: "🎓", popular: true },
  { name: "Delivery Tasks", icon: "📦", popular: false },
  { name: "Room Cleaning", icon: "🧹", popular: false },
  { name: "Event Support", icon: "🎉", popular: true },
  { name: "Tech Setup", icon: "💻", popular: false },
  { name: "Note Taking", icon: "📝", popular: false },
  { name: "Errands", icon: "🏃‍♂️", popular: true }
];

export default function PopularTasks() {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Popular Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tasks.map((task) => (
          <div
            key={task.name}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-green-400 transition duration-300 relative"
          >
            {task.popular && (
              <span className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full">
                Popular
              </span>
            )}
            <div className="text-3xl mb-4">{task.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {task.name}
            </h3>
            <p className="text-sm text-gray-500">Projects starting at ₳500</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition">
          View More Tasks
        </button>
      </div>
    </section>
  );
}
