import Footer from "@/components/footer";
import Header from "@/components/header";

const TaskerHomepage = () => {
    return ( 
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
        <div className="mt-8">
            <a
            className="px-6 py-3 bg-green-600 text-black text-lg rounded hover:bg-green-600 focus:outline-none"
            onClick={() => alert('Post a Task')}
            >
            Refresh new tasks
            </a>
            </div>
        
        <div className="mt-8">
        <h2 className="text-5xl font-semibold text-black">Tasks</h2>
        <div className="p-4 border rounded shadow-sm bg-green-200">
            <h3 className="text-lg font-bold text-black">Task Title: Clean the library</h3>
            <p className="text-black">Description: Organize books and clean shelves.</p>
            <p className="text-black">Expires: 2 hrs</p>
            <p className="text-black">Amount: 200 ADA</p>
            <p className="text-black">Status: open</p>
            <p className="text-black">School Name: University of Lagos</p>
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