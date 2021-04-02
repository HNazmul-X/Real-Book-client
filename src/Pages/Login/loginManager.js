import firebase from "firebase/app"
import "firebase/auth"
import { firebaseConfig } from "./fibase.config";


export const initializeAuthFramework = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }
} 

const GoogleProvider =  new firebase.auth.GoogleAuthProvider();
const FBProvider =  new firebase.auth.FacebookAuthProvider()
const githubProvider =  new firebase.auth.GithubAuthProvider()


export const signInWithGoogle = () => {
   return signInWtihProvider(GoogleProvider)
} 
export const signInWithFb = () => {
  return signInWtihProvider(FBProvider)
} 
export const signInWithGithub = () => {
  return signInWtihProvider(githubProvider)
} 





const signInWtihProvider = (provider) => {
     return firebase
         .auth()
         .signInWithPopup(provider)
         .then((result) => {
             const user = result.user;
             const newUser = {
                 isLoggedIn: true,
                 displayName: user.displayName,
                 email: user.email,
                 photoURL: user.photoURL,
                 succes: true,
                 error: "",
             };

             return newUser;
         })
         .catch((error) => {
             const errorMessage = error.message;

             const errorUser = {
                 isLoggedIn: false,
                 displayName: "",
                 email: "",
                 photoURL: "",
                 succes: false,
                 error: errorMessage,
             };

             return errorUser;
         });
}