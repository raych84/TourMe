import React from "react";
import "../styles/Footer.css";



function Footer() {
  return (
    <div className="ankle">
    <div className="container">
  <div className="row">
    <div className="col-sm">
      <br /><br />
    <img className="logoPic" src="../images/logo2.png" alt="tourme Logo" />
      
    </div>
    <div className="col-sm">
      <br /><br />
     <p>"May your adventures bring you closer together, even as they take you far away from home. – Trenton Lee Stewart"</p>
          
    </div>
    <div className="col-sm">
      <br /><br />
    <h6>Creators:</h6>
        <ul>
          <li>Rachel Williams <img class="ourPic" src="https://i.ibb.co/vqjK52k/67444614.jpg"></img></li>
          <li>Brigitte Gil <img class="ourPic" src="https://i.ibb.co/8mtD7wj/69640390.jpg"></img></li>
        </ul> 
    </div>
  

    <footer className="Footer">
      TourMe | <span>vacationplanners
</span> &#169;


    </footer>
    </div>
    </div>
    </div>
  );
}

export default Footer;

