import React from "react";
import Link from "next/link";
import Image from "next/image";
import photo from "./assets/photo.svg";

function Noentry() {
  return (
    <div>
      
      <br />

      <div>
        <center>
        <br/>
          <Image src={photo} height={400} width={400} />

          <h1 style={{fontSize:'25px'}}>Entry Restricted</h1>
          <br/>
          <h3 style={{fontSize:'18px'}}>You have no entry rather you are the admin. </h3>
            <br/>
          <div style={{}}>
          <button
            style={{
              padding: "15px",
                borderRadius: "7px",
                color: "white",
                background: "#000",
            }}
          >
            <Link href="/"
              
              style={{
                textDecoration: "none",
                padding: "15px",
                borderRadius: "7px",
                color: "white",
                background: "#000",
              }}
            >
           
            Back to Log In
           

            </Link>
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Noentry;