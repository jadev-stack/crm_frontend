import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Maestra } from "../screens/Maestra";
import { Cargas } from "../screens/Cargas";
import { Saldos } from "../screens/Saldos";
import { Users } from "../screens/Users";
import { Login } from "../screens/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  /* if (!token) {
    return <Login setToken={setToken} />;
  } */
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login setToken={setToken} />
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
