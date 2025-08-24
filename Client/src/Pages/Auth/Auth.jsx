import React, { useState, useContext,} from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../../Utils/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utils/action.type";
import { ClipLoader } from "react-spinners";
import classes from "./Auth.module.css";


function Auth() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [error,setError]= useState('')
  const [loading,setLoading]= useState(false)


  const [{user},dispatch] = useContext(DataContext)
  const navigate = useNavigate()


  
  const authHandler= async(e)=>{
    e.preventDefault()
    
    if (e.target.name=="signin") {
      setLoading(true)
      // Sign In Logic
      signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user
        })
        navigate('/')
        
      }).catch((err)=>{
        setError(err.message)
      }).finally(()=>{
        setLoading(false)
      })
    }

  }


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

          <button type="submit" name="signin" onClick={authHandler}>Sign In</button>
          {loading ? <ClipLoader color={'#000'} size={15}/> : ''}
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
        {
          error &&  <small style={{
            padding:"10px",
            color:"red",
          }}>{error}</small>
        }
        
        
        
      </div>
    </section>
  );
}

export default Auth;
