import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"

const Signup = () => {
  return (
    <div>

<>
  <br />
  {/* <center><h1>LOGIN OR SIGNUP FOR PEOPLE WHO ARE LOOKING FOR A JOB</h1></center> */}
  <br /> <br />
  {/* <img src="loginjob.jpg" class="float-end" width="590"> */}
  {/* <div class="box" style="background-color: #86ffc495; "> */}
  <br />
  <center>
    <h2>SIGNUP</h2>
  </center>
  {/* <p>ENTER YOUR MOBILE NUMBER:<input type="number" placeholder="enter ur number"></p>
 <p>
     ENTER YOUR PASSWORD:<input type="password" placeholder="enter ur password"> </p>
     <div class="container">
   <center>
   <button type="button" class="btn btn-secondary"> <a class=" text-light " href="lonav.html"><h4><em>SUBMIT</em></h4></a></button>
   <br><br>
   <button type="button" class="btn btn-warning"> <a class=" text-light " href="SIGNUP.html"><h4><em>DONT HAVE ACCOUNT CLICK HERE TO CREATE</em></h4></a></button>
   <br><br>
   </center> */}
  <pre />
  <div className="card" style={{ width: 400 }}>
    <img
      className="card-img-top"
      src="https://static.vecteezy.com/system/resources/previews/018/909/278/large_2x/first-day-at-school-asian-little-girl-using-a-laptop-computer-studying-through-online-e-learning-system-photo.jpg"
      alt="Card image"
      style={{ width: "100%" }}
    />
    <div className="card-body">
      <h4 className="card-title">SIGN UP</h4>
      <p className="card-text">
        ENTER FIRST NAME:
        <br />
        <input type="name" />
      </p>
      <p className="card-text">
        ENTER LAST NAME:
        <br />
        <input type="name" />
      </p>
      <p className="card-text">
        ENTER YOUR MOBILE NUMBER:
        <input type="number" />
      </p>
      <p className="card-text">
        Email:
        <br />
        <input type="email" name="email" id="email" />{" "}
      </p>
      <p className="card-text">
        CREATE YOUR PASSWORD:
        <input type="password" />{" "}
      </p>
      <Link to="/genlogin" className="btn btn-primary">
        SIGN UP
      </Link>
      <div className="sidebyside">
        <p className="card-text">Already have an account</p>
        <Link to="/genlogin" className="btn btn-primary">
          LOGIN
        </Link>
      </div>
    </div>
  </div>
  <br />
</>

        <Outlet />
    </div>
  )
}

export default Signup
