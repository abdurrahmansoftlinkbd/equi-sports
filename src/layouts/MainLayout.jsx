import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
