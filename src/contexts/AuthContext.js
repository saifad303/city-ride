import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

let AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let [currentUser, setCurrentUser] = useState();
  let [loading, setLoading] = useState(true);

  let signup = (name, email, password) => {
    console.log(name, email, password);
    return auth.createUserWithEmailAndPassword(email, password);
  };

  let signin = (email, password) => {
    console.log(email, password);
    return auth.signInWithEmailAndPassword(email, password);
  };

  let signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  let value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
