import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"
const PostTweets = () => {
  return (
    <div>
      <br />
  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <strong>
        <pre />
        <p> </p>
        <pre />
        <p />
      </strong>
      <ul>
        <strong></strong>
        <li>
          <strong></strong>
          <div className="container">
            <strong></strong>
            <div className="dropdown">
              <strong></strong>
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <strong>
                  <Link className="text-dark " to="/">
                    TWEETS
                  </Link>{" "}
                </strong>
              </button>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link className="dropdown-item text-dark" to="/posttweet">
                    POST TWEET
                  </Link>
                </li>
                <hr />
                <li>
                  {" "}
                  <Link
                    className="dropdown-item text-dark"
                   to="/mytweets"
                  >
                    VIEW MY TWEETS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <hr />
        <li>
          <Link className=" text-dark" to="/updateplatedetail">
            <strong>UPDATE PLANT DISEASE DETAILS</strong>
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-primary bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <br />
  <br />
  <div className="box" style={{ backgroundColor: "rgb(178, 240, 255)" }}>
    {/* <img class="float-end rounded-circle" src="post.jpg" width="300px"> */}
    <form>
      <center>
        <em>
          <u>
            <h1>POST A TWEET</h1>
          </u>
        </em>
      </center>
      <p>
        ENTER YOUR NAME <input type="text" name="name" placeholder="name" />
      </p>
      <p>
        DISEASE: <input type="text" name="name" placeholder="disease" />
      </p>
      <p>
        POST TWEET <input type="text" name="address" />
      </p>
      <center>
        <button type="button" className="btn btn-secondary">
          {" "}
          <a className=" text-light " href="#">
            <h4>
              <em>POST</em>
            </h4>
          </a>
        </button>
      </center>
      <br />
      <br />
    </form>
  </div>
  <br />









        <Outlet />
    </div>
  )
}

export default PostTweets
