import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogIn = () => {
    // console.log("hello");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <>
          <button onClick={handleGoogleLogIn}>LogIn with Google</button>
        </>
      )}

      {user && (
        <div>
          <h3>User Name: {user.displayName}</h3>
          <p> Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
