import React, { useRef, useState } from "react";
import { formValidator } from "../utils/formValidator";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL, SIGN_BG } from "../utils/constants";


const Login = () => {
  const [isSingInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const formValidation = () => {
    const message = formValidator(email.current.value, password.current.value);

    setError(message);

    if (message) return;
    if (!isSingInForm) {
      createUserWithEmailAndPassword(
        auth,

        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src={SIGN_BG}
          alt="bimage"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl ">
          {isSingInForm ? "Sign In" : "Sign up"}
        </h1>

        {!isSingInForm ? (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 my-4 w-full text-black"
          />
        ) : null}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 w-full text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full text-black"
        />

        <p className="text-red-600 fill-teal-50 py-2">{error}</p>
        <button
          onClick={formValidation}
          className="sign-button bg-red-700  h-14 w-full rounded-md my-4"
        >
          {isSingInForm ? "Sign In" : "Sign up"}
        </button>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsSignInForm(!isSingInForm);
          }}
        >
          {isSingInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
