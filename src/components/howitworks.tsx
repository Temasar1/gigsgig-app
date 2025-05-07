import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 border-t">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">1</div>
            <p className="text-lg">Choose a Tasker by price, skills, and reviews.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">2</div>
            <p className="text-lg">Schedule a Tasker as early as today.</p>
          </div>
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">3</div>
            <p className="text-lg">Chat, pay, tip, and review all in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
