import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confpassword, setConfpassword] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const saveRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        fullname,
        username,
        email,
        password,
        Confpassword,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <p>{msg}</p>
      <div className="bg-secondary pb-5 pt-4 px-5 mt-5 rounded">
        <h2 className="text-center mb-4">Register</h2>
        <form className="d-flex flex-column" onSubmit={saveRegister}>
          <label className="font-weight-bold">Full Name</label>
          <div className="">
            <input
              type="text"
              className=""
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="">
            <label className="mt-1">Username</label>
            <div className="">
              <input
                type="text"
                className=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>
          <div className="">
            <label className="mt-1">Email</label>
            <div className="">
              <input
                type="email"
                className=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="">
            <label className="mt-1">Password</label>
            <div className="">
              <input
                type="password"
                className=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="">
            <label className="mt-1">Confirm Password</label>
            <div className="rounded">
              <input
                type="password"
                className=""
                value={Confpassword}
                onChange={(e) => setConfpassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="mt-2 mx-auto">Already have an account?</div>
          <a href="/" role="button" className="mx-auto text-reset">
            Login
          </a>
          <button type="submit" className="py-1 px-2 mx-auto mt-5 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
