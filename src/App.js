import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingView from "./Component/LandingView";
import Home from "./Component/Home";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { useStore, getConnectedComponent } from "./store";

function App() {
  // REDUX: Instance of store
  const store = useStore();
  const LandingViewContainer = getConnectedComponent(LandingView);
  const HomeContainer = getConnectedComponent(Home);

  return (
    <BrowserRouter>
      <Container disableGutters maxWidth={false}>
        <Switch>
          <Provider store={store}>
            <Route path="/" exact component={LandingViewContainer}></Route>
            <Route path="/home" exact component={HomeContainer}></Route>
          </Provider>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
