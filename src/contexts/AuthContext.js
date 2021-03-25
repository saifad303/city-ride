import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

let AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let [currentUser, setCurrentUser] = useState();

  let signup = (name, email, password) => {
    console.log(name, email, password);
    return auth.createUserWithEmailAndPassword(email, password);
  };

  let signin = (email, password) => {
    console.log(email, password);
    return auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  let value = {
    currentUser,
    signup,
    signin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
