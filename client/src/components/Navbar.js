import React from "react";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="./aboutme.html">
      
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

        <ul class="navbar-nav">

          <li class="nav-item">
            <a id class="nav-link" href="/login">Login </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">SignUp </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;