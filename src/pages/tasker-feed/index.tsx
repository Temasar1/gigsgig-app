import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";
//import wallet from "@meshsdk/react";

const TaskerHomepage = () => {
     const [tasker, setTasker] = useState(null);

    //  async function fetchTaskers(){
    //     const res = await fetch("http://localhost:8000/tasker");
    //     const data = await res.json();
    //     setTasker(data);
    //  }
    // useEffect(() => {
    //   fetchTaskers()
    // },[]);

    return ( 
   <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
        <div className="mt-8">
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task title"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-black">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-800"
                        placeholder="Enter task description"
                        rows={4}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter amount in ADA"
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="block text-lg font-medium text-black">
                        Duration
                    </label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task duration"
                    />
                </div>
                <a
                className="px-6 py-3 bg-green-800 text-black text-lg rounded hover:bg-green-600 focus:outline-none"
                onClick={() => alert('Post a Task')}
                >
                Post Task
            </a>
            </form>
        </div>
        <div className="mt-12">
        <h2 className="text-3xl font-semibold text-black mb-6">Tasks posted</h2>
        <div className="p-4 border rounded shadow-sm bg-green-100">
            <h3 className="text-lg font-bold text-black mb-2">Task Title: Clean the library</h3>
            <p className="text-black mb-1">Description: Organize books and clean shelves.</p>
            <p className="text-black mb-1">Expires: 2 hrs</p>
            <p className="text-black mb-1">Amount: 200 ADA</p>
            <p className="text-black mb-1">interested: 1</p>
            <div className="flex space-x-4">
            <a className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
                Accept tasker
            </a>
            <a className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
               pay tasker
            </a>
            </div>
        </div>
        </div>
    <Footer />
   </section>
  );
}
 
export default TaskerHomepage;