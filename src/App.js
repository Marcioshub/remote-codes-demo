import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Typography from "@material-ui/core/Typography";
import Home from "./Home";

function App() {
  return (
    <div style={{ position: "relative", textAlign: "center", height: "100vh" }}>
      <Navigationbar />
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer">
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          className="footer-font"
        >
          Beam® is a registered trademark of Southern Telecom, Inc.
        </Typography>
      </div>
    </div>
  );
}

export default App;
