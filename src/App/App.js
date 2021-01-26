import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Maestra } from "../screens/Maestra";
import { Cargas } from "../screens/Cargas";
import { Saldos } from "../screens/Saldos";
import { Users } from "../screens/Users";
import { Login } from "../screens/Login";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/maestra">
            <Maestra />
          </Route>
          <Route path="/cargas">
            <Cargas />
          </Route>
          <Route path="/saldos">
            <Saldos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
