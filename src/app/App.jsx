//Core
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import store from "./redux/store";
import am from "./App.module.css";

//Components
import { withSuspense } from "./hoc/withSuspense";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
const WelcomePage = React.lazy(() =>
  import("./components/WelcomePage/WelcomePage")
);
const Time = React.lazy(() => import("./components/Time/Time"));
const Weather = React.lazy(() => import("./components/Weather/Weather"));

const App = () => {
  return (
    <div className={am.appWrapper}>
      <Header />
      <NavBar />
      <div className={am.appWrapper__content}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/welcome"} />} />
          <Route path="/welcome" render={withSuspense(WelcomePage)} />
          <Route exact path="/time" component={withSuspense(Time)} />
          <Route exact path="/weather" component={withSuspense(Weather)} />
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
      </div>
    </div>
  );
};

const AxbitApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AxbitApp;
