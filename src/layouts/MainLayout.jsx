import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <nav className="bg-primary text-white font-poppins">
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
      <footer className="bg-primary mt-24">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
