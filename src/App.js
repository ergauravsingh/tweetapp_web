import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingView from "./Component/LandingView";
import Home from "./Component/Home";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container disableGutters maxWidth={false}>
        <Switch>
          <Route path="/" exact component={LandingView}></Route>
          <Route path="/home" exact component={Home}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;