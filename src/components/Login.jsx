import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-secondary px-5 py-3 mt-5 rounded">
        <h2 className="text-center">Login</h2>
        <p>{msg}</p>
        <form className="d-flex flex-column" onSubmit={Auth}>
          <div className="">
            <label className="font-semibold">Username</label>
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
            <label className="font-semibold">Password</label>
            <div className="">
              <input
                type="text"
                className=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="****"
              />
            </div>
          </div>
          <div className="mt-2 mx-auto">Dont have an account?</div>
          <a href="/register" role="button" className="mx-auto text-reset">
            Register
          </a>
          <button type="submit" className="py-1 px-2 mx-auto mt-5 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
