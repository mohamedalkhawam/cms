import React, { useState, useEffect } from "react";
import LoginCard from "./Login";
import ForgetPasswordCard from "./forgetPassword";
export default function Login() {
  const [toggleLogin, setToggleLogin] = useState(true);
  const mainColor = "#333333";

  return (
    <div
      style={{ backgroundColor: mainColor }}
      className={` 
       h-screen w-screen flex flex-col justify-center items-center  `}
    >
      <div className="max-h-screen w-screen flex flex-col justify-center items-center">
        <LoginCard toggle={toggleLogin} toggleEvent={setToggleLogin} />
        <ForgetPasswordCard toggle={toggleLogin} toggleEvent={setToggleLogin} />
      </div>
    </div>
  );
}
