import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import codeList from "../codes.json";
import CodeChips from "./CodeChips";

// codes
import tv from "../codes/tv";
import audio from "../codes/audio";
import bluray from "../codes/bluray";
import digitalframe from "../codes/digitalframe";
import dvdplayer from "../codes/dvdplayer";
import settopbox from "../codes/settopbox";
import soundbar from "../codes/soundbar";
import streaming from "../codes/streaming";
import tvdvd from "../codes/tvdvd";
import vcr from "../codes/vcr";

const devices = [
  {
    value: "AUDIO",
    label: "AUDIO"
  },
  {
    value: "BLU-RAY",
    label: "BLU-RAY"
  },
  {
    value: "DIGITAL FRAME",
    label: "DIGITAL FRAME"
  },
  {
    value: "DVD PLAYER",
    label: "DVD PLAYER"
  },
  {
    value: "SET-TOP BOX",
    label: "SET-TOP BOX"
  },
  {
    value: "STREAMING MEDIA PLAYER",
    label: "STREAMING MEDIA PLAYER"
  },
  {
    value: "TV",
    label: "TV"
  },
  {
    value: "SOUNDBAR",
    label: "SOUNDBAR"
  },
  {
    value: "TV/DVD COMBO",
    label: "TV/DVD COMBO"
  },
  {
    value: "VCR",
    label: "VCR"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  const [device, setDevice] = React.useState("");
  const [brandState, setBrandState] = React.useState(true);
  const [brandList, setBrandList] = React.useState([]);
  const [brand, setBrand] = React.useState("");
  const [codes, setCodes] = React.useState([]);

  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    console.log("current device: ", device);
    console.log("current brand: ", brand);

    if (brand === "") {
      // reset codes
      //setCodes([]);
      //setKey("");
    } else {
      var tmp = [];
      var index = 0;
      for (var i = 0; i < codeList.length; i++) {
        if (codeList[i].device === device && codeList[i].brand === brand) {
          console.log(codeList[i].code);
          tmp.push({ key: index, label: codeList[i].code });
          index++;
        }
      }
      setCodes(tmp);
      setKey(brand);
    }
    // eslint-disable-next-line
  }, [brand]);

  function changeDevice(event) {
    setDevice(event.target.value);
    setBrand("");
    setCodes([]);
    setKey("");

    // brand disable on inital start
    // enable brand dropdown after user as chosen a device
    if (brandState) {
      setBrandState(false);
    }

    // set brand dropdown list depending on device chosen
    switch (event.target.value) {
      case "TV":
        setBrandList(tv);
        break;
      case "TV/DVD COMBO":
        setBrandList(tvdvd);
        break;
      case "SET-TOP BOX":
        setBrandList(settopbox);
        break;
      case "DIGITAL FRAME":
        setBrandList(digitalframe);
        break;
      case "STREAMING MEDIA PLAYER":
        setBrandList(streaming);
        break;
      case "BLU-RAY":
        setBrandList(bluray);
        break;
      case "AUDIO":
        setBrandList(audio);
        break;
      case "VCR":
        setBrandList(vcr);
        break;
      case "SOUNDBAR":
        setBrandList(soundbar);
        break;
      case "DVD PLAYER":
        setBrandList(dvdplayer);
        break;
      default:
        break;
    }
  }

  function changeBrand(event) {
    setBrand(event.target.value);
    //console.log(event.target.value);
  }

  function listBrands() {
    return brandList.map(option => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ));
  }

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Device"
            value={device}
            onChange={changeDevice}
            helperText="Please select your device"
            variant="outlined"
          >
            {devices.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="Brand"
            value={brand}
            onChange={changeBrand}
            helperText="Please select your brand"
            variant="outlined"
            disabled={brandState}
          >
            {listBrands()}
          </TextField>
        </div>
      </form>
      <CodeChips key={key} chips={codes} />
    </React.Fragment>
  );
}
