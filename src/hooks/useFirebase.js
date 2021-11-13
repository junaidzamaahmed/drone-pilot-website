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
import axios from "axios";
import swal from "sweetalert";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const registerUser = (loginData, history, redirectURL) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const email = loginData.email;
        const name = loginData.name;
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(newUser);
        history.push(redirectURL);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            swal("Oops!", `${error.message}`, "error");
          });
      })
      .catch((error) => {
        swal("Oops", `${error.message}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signIn = (loginData, history, redirectURL) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        history.push(redirectURL);
      })
      .catch((error) => {
        swal("Oops", `${error.message}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        swal("Oops", `${error.message}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        fetch(`https://floating-dusk-12648.herokuapp.com/users/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.role === "admin") {
              setIsAdmin(true);
            } else if (user?.role !== "admin") {
              setIsAdmin(false);
            }
          });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  const saveUser = (user) => {
    axios
      .post("https://floating-dusk-12648.herokuapp.com/users", user)
      .then((res) => {});
  };

  return {
    user,
    registerUser,
    signIn,
    logOut,
    isLoading,
    setIsLoading,
    isAdmin,
  };
};
export default useFirebase;
