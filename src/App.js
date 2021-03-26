// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import LoginSignUp from "./components/private/LoginSignUp";
// css
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// pages
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signup/SignUp";
import Search from "./components/pages/search/Search";
import SearchResult from "./components/pages/search-result/SearchResult";
// contexts
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <LoginSignUp path="/login" component={Login} />
            <LoginSignUp path="/signup" component={SignUp} />
            <Route path="/search" component={Search} />
            <Route path="/search-result" component={SearchResult} />
          </Switch>
        </AuthProvider>
      </>
    </Router>
  );
}

export default App;
