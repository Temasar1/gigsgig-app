import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import PopularTasks from "@/components/populartasks";
import Footer from "@/components/footer";


const workerForm  = () => {
  return (
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
  <div className="h-screen flex items-center justify-center -my-40">
    <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Worker Sign Up</h2>
      <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-black">
      Username
      </label>
      <input
      type="text"
      id="username"
      name="username"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter your username"
      />
      </div>
      <div className="mb-4">
      <label htmlFor="school" className="block text-sm font-medium text-black">
      Name of School
      </label>
      <input
      type="text"
      id="school"
      name="school"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter your school name"
      />
      </div>
      <div className="mb-4">
      <label htmlFor="work" className="block text-sm font-medium text-black">
       Works Interested In
      </label>
      <input
      type="text"
      id="work"
      name="work"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter the type of work"
      />
      </div>
      <div className="mb-4">
      <label htmlFor="amount" className="block text-sm font-medium text-black">
       Minimum expected to receive
      </label>
      <input
      type="number"
      id="amount"
      name="amount"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="e.g 100 ADA"
      />
      </div>
      <button
      type="submit"
      className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      
      >
      Submit
      </button>
    </form>
  </div>
      <PopularTasks />
      <Footer />
    </section>
  );
};

export default workerForm;
