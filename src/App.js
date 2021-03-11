import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import './App.css';
import Team from './Components/Team/Team';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {

  return (
    <Router >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/team/:idTeam">
          <Team></Team>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
