import React from "react";
// import Button from '@material-ui/core/Button';*
import "./footer.scss";
import Facebook from "./facebook.png";
import Instagram from "./Instagram.jpg";
import Twitter from "./twitter.png";
// import LinkedIn from './linkedin.png';
import Pornhub from "./Pornhub.jpg";

function App() {
  return (
    <div className="App">
      {/* <Button
         variant="contained"
         color="primary"
         onClick={() => alert('Stop touching me!')}
       >
         Hello, Browser!
       </Button> */}
      <footer id="footer">
        <div id="ThankYou">
          <h2>Thank you for Sharing!</h2>
        </div>
        <br />
        <br />
        <br />
        <div id="logos">
          <a href="https://www.facebook.com/groups/1251744728327172">
            <img className="LogoPic" src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/uwcomedyclub/">
            <img className="LogoPic" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/uwcomedyclub">
            <img className="LogoPic" src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            {/* <img className="LogoPic" src={LinkedIn} alt="LinkedIn" /> */}
            <img className="LogoPic" src={Pornhub} alt="Pornhub For Real!" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
