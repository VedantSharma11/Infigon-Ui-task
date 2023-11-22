import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex ">
       <Sidebar/>
       <div className="flex flex-col w-full px-8 ml-52 sm:ml-48 md:ml-52 lg:ml-60 xl:ml-80 overflow-hidden">
       <Navbar/>
       <Dashboard/>
       </div>
    </div>
  );
}

export default App;
