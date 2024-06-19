import React, { useState } from "react";
import Header from "./Header";
const Login = () => {

    const[isSingInForm,setIsSignInForm] = useState(true)

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt="bimage"
        />
      </div>

      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 ">
        <h1 className="font-bold text-3xl ">{isSingInForm ? "Sign In" : "Sign up"}</h1>
        
       {!isSingInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full text-black"
        />)}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-black"
        />
        <button className="sign-button bg-red-700  h-14 w-full rounded-md my-4">
          {isSingInForm ? "Sign In" : "Sign up"}
        </button>
        <p className = "cursor-pointer" onClick={()=>{
        setIsSignInForm(!isSingInForm)
        }}>{isSingInForm ? "New to Netflix? Sign up now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
