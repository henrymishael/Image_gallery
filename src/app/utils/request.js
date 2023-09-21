import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const BASE_URL = 'https://ctfapi.onrender.com';


export async function signUp(username, email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  return response.json();
}

const firebaseConfig = {
  apiKey: "AIzaSyDOsjSyUat7Gh4yevN0eyG5-5bJDEMVlf0",
  authDomain: "image-gallery-777.firebaseapp.com",
  projectId: "image-gallery-777",
  storageBucket: "image-gallery-777.appspot.com",
  messagingSenderId: "362858866869",
  appId: "1:362858866869:web:31c53f1edcb67e977bf6fc",
  measurementId: "G-JHWW1ZG6NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth}





