import React, { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import Extra from "./Extra";
import Result from "./Result";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            style={{
              marginRight: 20,
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            ResumeBuilder
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function Main() {
  const [step, setstep] = useState(1);
  //   const [value, setvalue] = useState([]);
  const nextStep = () => {
    if (step < 6) {
      setstep(step + 1);
    } else if (step === 6) {
      console.log();
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setstep(step - 1);
    }
  };
  return (
    <div>
      <App />
      <div>
        <div className="container d-flex justify-content-center align-items-center">
          <div>
            {
              {
                1: <Personal />,
                2: <Education />,
                3: <Project />,
                4: <Experience />,
                5: <Extra />,
                6: <Result />,
              }[step]
            }
            <div className="d-flex justify-content-around px-2 mt-2">
              {step > 1 ? (
                <button className="btn btn-danger" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button
                name="ok"
                className="btn btn-primary"
                onClick={nextStep}
                type="submit"
              >
                {step === 6 ? "Download" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
