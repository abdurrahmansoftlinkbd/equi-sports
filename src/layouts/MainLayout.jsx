import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <nav className="bg-primary text-white font-poppins">
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
