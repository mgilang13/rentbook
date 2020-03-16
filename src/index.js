import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Auth/Login";
import viewBook from "./Components/ViewBook";
import editBook from "./Components/EditBook";
import deleteBook from "./Components/DeleteBook";
import Register from "./Auth/Register";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppWithRoute = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={App} />
      <Route path="/viewBook/" component={viewBook} />
      <Route path="/editBook/" component={editBook} />
      <Route path="/deleteBook/" component={deleteBook} />
    </Switch>
    </Router>
  );
};

ReactDOM.render(<AppWithRoute />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
