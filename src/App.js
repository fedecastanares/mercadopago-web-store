import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import Pending from "./pages/Pending";
import Failure from "./pages/Failure";

import ContextBundle from "./context";

import Header from "./components/Header";

function App() {
  return (
    <>
      <ContextBundle>
        <Router>
          <Switch>
            <Header>
              <Route exact path="/" component={Home} />
              <Route exact path="/order" component={Order} />
              <Route path="/success" component={Success} />
              <Route path="/pending" component={Pending} />
              <Route path="/failure" component={Failure} />
            </Header>
          </Switch>
        </Router>
      </ContextBundle>
    </>
  );
}

export default App;
