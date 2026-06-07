import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";

export function useLogin() {
  if (!db) {
    throw new Error("Firebase database not initialized");
  }

  const auth = getAuth();
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, [auth]);

  const handleLogin = async (formData: FormData) => {
    try {
      if (auth.currentUser) {
        await signOut(auth);
        setUser(false);
        console.log("Logout bem-sucedido");
        return;
      }

      await signInWithEmailAndPassword(
        auth,
        formData.get("email") as string,
        formData.get("password") as string,
      );

      setUser(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLogin, user };
}
