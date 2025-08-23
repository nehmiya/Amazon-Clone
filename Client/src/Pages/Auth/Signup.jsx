import React from 'react'
import { Link } from "react-router-dom";
import classes from "./Auth.module.css";

function Signup() {
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
              <input type="text" name="email" id="email" required />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <input type="password" name="password" id="password" required />
            </div>

            <button>Sign Up</button>
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

export default Signup