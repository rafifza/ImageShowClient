import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="w-100% h-25 bg-primary">
      <div className="d-flex justify-content-between ">
        <p className="m-3">Hello</p>
        <button
          onClick={Logout}
          className="justify-content-end m-3 rounded border-0 bg-danger"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
