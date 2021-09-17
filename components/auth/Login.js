import React, { useState, useEffect } from "react";
export default function Login({ toggleEvent, toggle }) {
  const [toggleLogin, setToggleLoggin] = useState(toggle ? toggle : false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [responseMessage, setRespondseMessage] = useState(null);
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
      className={`login absolute  bg-white shadow-md hover:shadow-lg w-11/12 sm:w-96 px-5 rounded py-4  border max-w-screen overflow-hidden transition-all  ${
        toggleLogin ? `` : `inactive-sx`
      } active-sx`}
    >
      <div
        style={{ backgroundColor: mainColor }}
        className={`
             shadow-lg ${
               false ? `animate-pulse` : ``
             } my-4 border rounded p-5 text-white font-semibold text-center text-lg transform transition-all duration-500 overflow-hidden  z-50`}
      >
        Login
      </div>
      <div
        className={`  ${
          responseMessage === null ? ` -translate-x-full` : ` translate-x-0`
        } my-2 text-center text-sm transform transition-all duration-500 text-red-600 z-10`}
      >
        {responseMessage}
      </div>
      <div className="my-2">
        <div className="py-1 font-medium text-gray-700">Email:</div>
        <input
          type="email"
          placeholder="Email"
          autocomplete={false}
          reqired
          name="email"
          value={formData.email}
          onChange={(e) => {
            onChange(e);
          }}
          className="w-full px-2 py-3 bg-white border rounded shadow-md outline-none focus:outline-none focus:border-black "
        />
        {false ? (
          <p className="my-1 text-xs text-red-500 ">{errorValidation.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="my-2">
        <div className="py-1 font-medium text-gray-700">Password:</div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          reqired
          value={formData.password}
          onChange={(e) => onChange(e)}
          className="w-full px-2 py-3 bg-white border rounded shadow-md outline-none focus:outline-none focus:border-black"
        />
        {false ? (
          <p className="my-1 text-xs text-red-500">
            {errorValidation.password}
          </p>
        ) : (
          ""
        )}
      </div>
      <div
        style={{ color: mainColor }}
        className="text-sm text-green-800 underline cursor-pointer"
        onClick={() => (toggleEvent ? toggleEvent(false) : null)}
      >
        Forgat your password?
      </div>
      <div className="flex items-center justify-center w-full px-4 py-6">
        <button
          // onClick={submit}
          style={{
            backgroundColor: mainColor,
            borderColor: mainColor,
          }}
          className=""
          // disabled={_objI?.(errorValidation)}
          className={`   border
              w-10/12 ${
                false ? `cursor-not-allowed` : ``
              }  px-12 py-3 border-green-700 rounded shadow-md hover:shadow-lg outline-none focus:outline-none  bg-green-600 text-white hover:bg-green-700 relative`}
        >
          {false ? (
            <svg
              className="absolute w-5 h-5 mr-3 border-r-2 border-white rounded-full animate-spin left-3"
              viewBox="0 0 24 24"
            ></svg>
          ) : (
            ""
          )}
          LOGIN
        </button>
      </div>
    </div>
  );
}
