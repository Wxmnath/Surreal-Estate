import {
  React,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
