import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"
const ViewMyTweets = () => {
  return (
    <div>
      <>
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
  <br />
  <navbar>
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        placeholder="ENTER POST YOU ARE INTRESTED IN "
      />
      <button className="btn btn-primary  bi bi-search " type="button">
        Search
      </button>
    </form>
  </navbar>
  <br />
  <br />
  <div className="box" style={{ backgroundColor: "rgb(255, 245, 159)" }}>
    <strong>Researcher Name:</strong>
    <p>XYZ</p>
    <br />
    <strong>PLANT DISEASE:</strong>
    <p>Downy mildew</p>
    <br />
    <strong>TWEET:</strong>
    <p>
      They attack vegetables, fruits, and flowers. By the time a plant shows
      symptoms, it is too late. Prevention is key.
    </p>
  </div>
  <br />
</>

        <Outlet />
    </div>
  )
}

export default ViewMyTweets
