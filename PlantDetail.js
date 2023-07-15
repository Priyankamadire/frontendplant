import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom"

const Plantdisease = () => {
  return (
    <div>

<>
  <br />
  <h2>PLANT DISEASE DETAILS</h2>
  <br />
  <table style={{ width: "100%" }} className="text-light">
    <tbody>
      <tr>
        <th>S.NO</th>
        <th>NAME</th>
        <th>PLANT NAME</th>
        <th>DISEASE</th>
        <th>RECOVERY</th>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <pre>{"        "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
      </tr>
      <tr>
        <td>
          <pre>{"        "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
      </tr>{" "}
      <tr>
        <td>
          <pre>{"        "}</pre>
        </td>
        <td />
        <td />
        <td />
        <td />
      </tr>
    </tbody>
  </table>
</>

      
      <Outlet />
    </div>
  )
}

export default Plantdisease
