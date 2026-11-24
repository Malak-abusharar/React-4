import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/Config.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./SignIn.css";
import Modal from "shared/Modal";
export default function SignIn() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [MessageError, setMessageError] = useState("");
  const [rsestEmail, setRsestEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resetPassword, setResetPassword] = useState("");
  const signInBTN = (eo) => {
    eo.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("log in");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        // setMessageError(errorCode)
        switch (errorCode) {
          case "auth/invalid-email":
            setMessageError("Wrong Email");
            break;
          case "auth/invalid-password":
            setMessageError("Wrong Password");
            break;
          case "auth/invalid-credential":
            setMessageError("Wrong");
            break;
          case "auth/too-many-requests":
            setMessageError("Tray Later!");
            break;
          default:
            console.log("error");
        }
        console.log("faild log in");
      });
  };
  const resetPassBTN = (eo) => {
    eo.preventDefault();
    sendPasswordResetEmail(auth, resetPassword)
      .then(() => {
        // Password reset email sent!
        setRsestEmail(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
const closeModal = () => {
  setShowModal(false);
}

  return (
    <div>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            required
            placeholder="email"
            type="email"
          />
          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            required
            placeholder="password"
            type="password"
          />
          <button
            onClick={(eo) => {
              signInBTN(eo);
            }}
          >
            Sign in
          </button>
          <p className="account">
            <Link to="/Signup">Sign up</Link>
          </p>
          {error && <p>{MessageError}</p>}
          <p
            className="reset-pass"
            onClick={() => {
              setShowModal(true);
            }}
          >
            reset password
          </p>
        </form>
{showModal &&      
<Modal closeModal={closeModal}/>
   }
      </main>
      <Footer />
    </div>
  );
}
