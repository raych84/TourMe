import React, { Component} from "react";
import "../styles/LoginSignup.css";
import User from "./User";


class LoginSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: "signUp",
      currentPage: "loginsignup"
    }
  }
  handlePageChange = page => {
    this.setState({ currentPage: page});
  };

  renderPageChange = () => {
    if (this.state.currentPage === "LoginSignup") {
      return <User />;
    } else if (this.state.currentPage === "User") {
      return <User />
    }
  };

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (

          <div className='logsignin'>
          

          <form>
          
            <h2 className="header-login">
            DISCOVER THE UNDISCOVERED
     </h2>
            <fieldset>
              <legend> Sign Up!</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <br />
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <br />
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <br />
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>

            <button type="create-acct-button" className="btn btn-outline-secondary" onClick={ () => this.handlePageChange("user")}>Submit</button>
           <br /><br />
            <button type="button" className="btn btn-outline-secondary" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
          </div>

        )
      case "logIn":
        return (
          <div className="logsignin2">
          <form>

            <h2 className="header-login">Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <br />
                  <input type="text" id="username" required />
                </li>
                <br />
                <li>
                  <label for="password">Password:</label>
                  <br />
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>

            <button type="login-button" className="btn btn-outline-light" onClick={ () => this.handlePageChange("/user")}>Login</button>
            <br /><br />
            <button type="button" className="btn btn-outline-light" onClick={ () => this.changeView("signUp")}>Create an Account</button>

          </form>
          </div>
        )
      case "PWReset":
        return (
          <form>
            <div className="logsignin2">
            <h2 className="header-login">Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>Go Back</button>
            </div>
          </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

export default LoginSignup;