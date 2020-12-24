import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./components/action/auth";
import Checkout from "./components/checkout/checkout";
import Main from "./components/common/main";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div id="App">
        <Router>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
