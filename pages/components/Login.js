import Link from "next/link";
import React, { useRef, useState } from "react";
import {firebase} from '../../lib/firebase';
import { useRouter } from "next/router";
import Image from "next/image";
import cash from '../assets/cash.svg';


function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  // login to firebase 
  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      router.push("/List")
    
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }





  return (
    <div >
     
        <div style={{ height: "85px", background: "white" }}>
         
         
          <hr />
        </div>
        <br />

        {/* make a login form  */}
        <center>
          <div style={{ marginLeft: "25px", marginRight: "25px" }}>
            <Image src={cash} width={200} height={200} />
            <h1 style={{fontSize:'25px'}}>Library Manager</h1>
            <form >
              {/* <label>Email</label> */}
              <br />
              <input
                type="email"
                id="email"
                ref={emailRef}
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  padding: "18px",
                  borderRadius: "6px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "20px",
                }}
                placeholder="Enter your email"
                autoComplete="block"
              />{" "}
              <br/>
              {/* <label>Password</label> */}
              
              <input
                type="password"
                id="password"
                ref={passwordRef}
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                  padding: "18px",
                  borderRadius: "6px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "20px",
                }}
                placeholder="Enter your password"
              />
              <br />
              <button
                id="loginbtn"
                type="submit"
                onClick={login}
                
                style={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  padding: "8px",
                  borderRadius: "6px",
                  color: "azure",
                  background: "#000",
                  border: "none",
                  fontSize: "18px",
                }}
              >
                Login
              </button> 
            </form>
          </div>
        </center>

    </div>
  );
}

export default Login;