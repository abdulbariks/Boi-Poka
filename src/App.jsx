import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar></Navbar>
        <div className="mb-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
