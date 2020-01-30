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
      <div
        style={{
          position: "relative",
          bottom: 0,
          textAlign: "center",
          width: "100%"
        }}
      >
        <Typography variant="overline" display="block" gutterBottom>
          Beam® is a registered trademark of Southern Telecom, Inc.
        </Typography>
      </div>
    </div>
  );
}

export default App;
