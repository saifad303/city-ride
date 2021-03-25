// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// css
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// pages
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";
import Search from "./components/pages/search/Search";
import SearchResult from "./components/pages/search-result/SearchResult";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/search" component={Search} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
