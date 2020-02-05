import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Typography from "@material-ui/core/Typography";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  font: {
    fontSize: "1.5vw"
  }
});

function App() {
  const classes = useStyles();
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
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          className={classes.font}
        >
          Beam® is a registered trademark of Southern Telecom, Inc.
        </Typography>
      </div>
    </div>
  );
}

export default App;
