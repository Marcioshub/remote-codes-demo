import React from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NewInputs from "./components/Inputs";

import remote from "./images/remote.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    "& .MuiTypography-gutterBottom": {
      marginTop: 25
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Remote Codes
      </Typography>

      <img src={remote} alt="remote" />

      <NewInputs />
    </div>
  );
}

export default App;
