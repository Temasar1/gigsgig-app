import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-r from-green-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Book trusted help for campus tasks
      </h1>
      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="What do you need help with?"
          className="w-full px-6 py-3 border rounded-full shadow-sm"
        />
      </div>
    </section>
  );
}
