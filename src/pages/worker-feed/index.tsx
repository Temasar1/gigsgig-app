import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, useEffect } from "react";

const TaskerHomepage = () => {

  const [work, setWork] = useState([{
    
  }]);
  const [newWork, isnewWork]  = useState(true);

  const updateWork = () => {
    const newData = [{
      title: "Wash",
      description: "To wash my clothes if anyone interested, been terribly lazy",
      duration: "1 hrs",
      amount: "500 ADA",
      status: "close",
      school: "Univerisity of Lagos",
      contact: "0812345678"
    }];

    if (JSON.stringify(work) !== JSON.stringify(newData)) {
      setWork(newData);
      isnewWork(true);
    } else {
      isnewWork(false);
    }
    if(!newWork){
      alert("No new task available")
    }
  }
async function fetchTaskers() {
  const res = await fetch("http://localhost:8000/tasker");
  const data = await res.json();
  return data; // Return the parsed object directly
};


  useEffect(() => {
   const fetchData = async () => {
    const data = await fetchTaskers();
    console.log(data[0].tasks[0]);
   };
   fetchData();
  }, []);

    return ( 
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
        <div className="mt-8">
            <a
            className="px-6 py-3 bg-green-600 text-black text-lg rounded hover:bg-green-600 focus:outline-none"
            onClick={updateWork}
            >
            Refresh new tasks
            </a>
            </div>
        
        <div className="mt-8">
        <h2 className="text-5xl font-semibold text-black">Tasks</h2>
        <div className="p-4 border rounded shadow-sm bg-green-200">
            <h3 className="text-lg font-bold text-black">Task Title: {work[0].title}</h3>
            <p className="text-black">Description: {work[0].description}</p>
            <p className="text-black">Expires: {work[0].duration}</p>
            <p className="text-black">Amount: {work[0].amount}</p>
            <p className="text-black">Status: {work[0].status}</p>
            <p className="text-black">School Name: {work[0].school}</p>
            <a className="px-4 py-2 bg-green-600 text-white border border-green-800 rounded hover:bg-green-700 cursor-pointer mr-2">
                accept work
            </a>
            <a className="px-4 py-2 bg-green-600 text-white border border-green-800 rounded hover:bg-green-700 cursor-pointer">
                claim reward
            </a>
          </div>
        </div>
    
    <Footer />
   </section>
  );
}
 
export default TaskerHomepage;