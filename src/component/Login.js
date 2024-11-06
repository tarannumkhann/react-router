import React, { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  console.log(userName, userPassword);

  const login = () => {
    localStorage.setItem(
      "loginData",
      JSON.stringify({ userName, userPassword })
    );
    navigate("/home");
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <div className="loginpage">
      <h1>Login Page</h1>
      <div id="input">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/01/19/32/93/240_F_119329387_sUTbUdeyhk0nuhNw5WaFvOyQFmxeppjX.jpg"
            alt=""
          />

          {/* <i className="fa-solid fa-user"></i> */}
          <input
            value={userName}
            onChange={handleUserName}
            type="text"
            placeholder="user name"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/11817/11817746.png?ga=GA1.1.204196125.1730792335&semt=ais_hybrid"
            alt=""
          />
          <input
            value={userPassword}
            onChange={handleUserPassword}
            type="text"
            placeholder="password"
            target=""
          />
        </div>
        <div>
          <button onClick={login}>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
