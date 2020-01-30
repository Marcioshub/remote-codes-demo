import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NewInputs from "./components/Inputs";

import remote from "./images/remote.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2" gutterBottom>
          Remote Codes
        </Typography>
      </div>

      <img src={remote} />

      <NewInputs />
    </div>
  );
}

export default App;
