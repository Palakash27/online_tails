import app from "../firebase/firebaseobject";
import { getAuth, signOut } from "firebase/auth";

function signout() {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("signout successful");
        })
        .catch((error) => {
            // An error happened.
        });
}

export default signout;
