import React, { useState, useEffect } from "react";
export default function Login({ toggleEvent, toggle }) {
  const [toggleLogin, setToggleLoggin] = useState(toggle ? toggle : false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const mainColor = "#333333";

  useEffect(() => {
    setToggleLoggin(toggle);
  }, [toggle]);
  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={`forgetPassowrd absolute  bg-white rounded w-11/12 sm:w-96  px-5 border shadow-md hover:shadow-lg    ${
        toggleLogin ? `inactive-dx` : `active-dx`
      } `}
    >
      <div
        style={{ backgroundColor: mainColor }}
        className={`shadow-lg  mt-4 border rounded p-3 text-white font-semibold text-center text-lg`}
      >
        Forget Password
      </div>
      <div className={`w-full flex justify-evenly items-center  px-4   `}>
        <button
          style={{ color: mainColor }}
          className={` border  px-4 py-2  rounded shadow-md hover:shadow-lg outline-none focus:outline-none  hover:bg-opacity-10  ${
            false ? `cursor-not-allowed opacity-60` : `cursor-pointer`
          }`}
          type="button"
          onClick={() => (toggleEvent ? toggleEvent(true) : null)}
        >
          BACK
        </button>

        <button
          style={{ backgroundColor: mainColor }}
          className={`border px-4 py-2  rounded shadow-md hover:shadow-lg 
                 outline-none focus:outline-none   text-white `}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
