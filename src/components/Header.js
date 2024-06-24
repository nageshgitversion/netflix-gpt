import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);



  const dispatch = useDispatch();

  useEffect(()=>{
  
   onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const{uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/")
    }
  });
   
  },[])

  const signoutFunction = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between absolute w-screen bg-gradient-to-b from-black px-1 py-1 z-10">
      <img
        className="w-44"
        src={
HEADER_LOGO
        }
        alt="logo"
      />

      {user && (
        <div className="p-4 text-white font-bold cursor-pointer">
          <h4 onClick={signoutFunction}>signOut</h4>
        </div>
      )}
    </div>
  );
};

export default Header;
