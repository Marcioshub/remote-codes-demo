import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
    backgroundColor: "ghostwhite"
  },
  chip: {
    margin: theme.spacing(0.5),
    height: 30,
    width: 90,
    fontSize: 16
  }
}));

export default function ChipsArray(props) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState(props.chips);
  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          {chipData.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            );
          })}
        </Paper>
      </Container>
    </Fragment>
  );
}
