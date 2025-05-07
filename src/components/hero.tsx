import React, { JSX } from "react";

const Hero: React.FC = () => {
  
  return(
 <section className="relative bg-gradient-to-br from-green-200 to-white py-16 px-4 text-center">
 <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
   <div>
     <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
       Book trusted help for campus tasks
     </h1>
     <p className="text-lg text-gray-600 mb-6">
       Connect with fellow students to get things done quickly and affordably within your university.
     </p>
     <div className="max-w-md mx-auto md:mx-0">
       <input
         type="text"
         placeholder="What do you need help with?"
         className="w-full px-6 py-3 border rounded-full shadow-sm"
       />
     </div>
   </div>
   <div>
     <img
       src="/illustration.png"
       alt="Students helping each other"
       className="w-full max-w-md mx-auto"
     />
   </div>
 </div>
</section>
  )
};

export default Hero;

/* Hero Section with Image and Text */
