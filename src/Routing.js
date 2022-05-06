import React from "react";
import Main from "./components/Main";
import Result from "./components/Result";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Toolbar from "@material-ui/core/Toolbar";
// import AppBar from "@material-ui/core/AppBar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Button from "@material-ui/core/Button";
// import MenuIcon from "@material-ui/icons/Menu";

function Routing() {
  return (
    <div>
      <div></div>
      <Router>
        <div>
          <Link to="/main">Main</Link>
        </div>
        <div>
          <Link to="/result">Result</Link>
        </div>
        <div>
          <Route path="/main" component={Main}></Route>
          <Route path="/result" component={Result}></Route>
        </div>
      </Router>
      {/* <App /> */}
    </div>
  );
}

// const App = () => {
//   return (
//     <div>
//       <h2>How to use AppBar Component in ReactJS?</h2>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             style={{
//               marginRight: 20,
//             }}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             style={{
//               flexGrow: 1,
//             }}
//           >
//             Dashboard
//           </Typography>
//           <Button color="inherit">Logout</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

export default Routing;
