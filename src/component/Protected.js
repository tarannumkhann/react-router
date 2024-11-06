import { useEffect } from "react";
import React, { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    console.log(loginData, "loginData");

    if (!loginData) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}
export default Protected;
