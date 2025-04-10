import React, { useState } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="logo"></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg opacity-85 ">
        <h1 className="text-white text-3xl py-4 px-2 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="bg-transparent border border-gray-400 text-gray-300 p-4 m-2 w-full rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="bg-transparent border border-gray-400 text-gray-300 p-4 m-2 w-full rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent border border-gray-400 text-gray-300  p-4 m-2 w-full rounded-sm"
        />
        <button className="p-4 my-6 mx-2 text-white w-full rounded-md bg-red-600 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 px-2 text-white cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
