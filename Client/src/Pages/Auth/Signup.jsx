import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Utils/firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utils/action.type";
import classes from "./Auth.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const [{user},dispatch] = useContext(DataContext)

  const authHandler = (e) => {
    e.preventDefault();

    if (e.target.name == "signup") {
        // sign up logic 
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            dispatch({
                        type: Type.SET_USER,
                        user: userCredential.user
                    })

        }).catch((err)=>{
            console.log('Err:', err)
        })
    }
  };

  return (
    <div>
      <section className={classes.signup}>
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt=""
          />
        </Link>
        <div className={classes.form__container}>
          <h1>Sign Up</h1>
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                required
              />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                required
              />
            </div>

            <button type="submit" name="signup" onClick={authHandler}>
              Sign Up
            </button>
          </form>
          <p className={classes.terms}>
            By signing up, you agree to the Amazon Clone’s Conditions of Use,
            Privacy Notice, and Cookies Notice. Please read them carefully
            before using our site.
          </p>
          <p className={classes.signin}>
            Already have an account?
            <span>
              <Link to="/auth/signin">Sign into your account</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Signup;
