import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Maestra } from "./screens/Maestra";
import { Cargas } from "./screens/Cargas";
import { Saldos } from "./screens/Saldos";
import { Users } from "./screens/Users";
import { Login } from "./screens/Login";

function App() {
  const [token, setToken] = useState();
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login token={setToken} />
          </Route>
          <Route exact path="/home">
            <Home token={token} />
          </Route>
          <Route path="/users">
            <Users token={token} />
          </Route>
          <Route path="/maestra">
            <Maestra token={token} />
          </Route>
          <Route path="/cargas">
            <Cargas token={token} />
          </Route>
          <Route path="/saldos">
            <Saldos token={token} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
