import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[1, 2, 3].map((step, index) => (
            <div
              key={step}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 text-green-600 text-2xl font-bold">
                {step}
              </div>
              <p className="text-lg text-gray-700">
                {index === 0 &&
                  "Choose a Tasker by price, skills, and reviews."}
                {index === 1 && "Schedule a Tasker as early as today."}
                {index === 2 && "Chat, pay, tip, and review all in one place."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
