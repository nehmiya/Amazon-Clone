import React from "react";
import { Link } from "react-router-dom";
import classes from "./Auth.module.css";

function Auth() {
  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.form__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" required />
          </div>

          <button>Sign In</button>
        </form>
        <p className={classes.terms}>
          By signing in, you agree to the Amazon Clone’s Conditions of Use,
          Privacy Notice, and Cookies Notice. Please read them carefully before
          using our site.
        </p>
        <p className={classes.register}>
          New to Amazon Clone?
          <span>
            <Link to="/auth/signup">Create your account</Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Auth;
