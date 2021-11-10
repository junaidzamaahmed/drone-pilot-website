import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const registerUser = (loginData) => {
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const email = loginData.email;
        const name = loginData.name;
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (loginData) => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return { user, registerUser, signIn, logOut };
};
export default useFirebase;
