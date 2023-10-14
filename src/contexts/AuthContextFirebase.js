import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { firebaseAuth } from '../config/FirebaseConfig';

const AuthFirebaseContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const logout = () => {
    return signOut(firebaseAuth)
  }

  const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(firebaseAuth, facebookProvider);
  }

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthFirebaseContext.Provider value={{ createUser, user, logout, signIn, signInWithFacebook, signInWithGoogle }}>
      {children}
    </AuthFirebaseContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthFirebaseContext);
};

// https://www.youtube.com/watch?v=x62aBvnRCKw
// https://github.com/fireclint/firebase-auth-context/blob/main/src/App.js