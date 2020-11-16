import React from "react";


function Signup() {
  return (
    <div>

      <div className="signup" style={{ textAlign: "center" }}>
        <h3>Don't have an account? Signup.</h3>
        <div className="form">
          <img src="https://image.shutterstock.com/image-photo/famous-monuments-world-grouped-together-260nw-313571078.jpg" />
          <span>
            <h2>Sign Up</h2>
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input id="name" type="text" name="name" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" type="email" name="email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" name="password" />
            <br />
            <input id="button" type="submit" defaultValue="Submit" />
            <br />
            <a href="/">Eh... Maybe Later</a>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Signup;