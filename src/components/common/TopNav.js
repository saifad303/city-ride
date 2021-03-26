import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function TopNav() {
  let { currentUser, signout } = useAuth();
  let history = useHistory();
  async function logoutHandler() {
    try {
      await signout();
      history.push({
        pathname: "/login",
      });
    } catch (e) {}
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-12 p-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/search">
                    Destination
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Contact
                  </NavLink>
                </li>

                {currentUser ? (
                  <>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        My Profile
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <span className="dropdown-item">
                          {currentUser.email}
                        </span>
                        <span className="dropdown-item">
                          <button
                            type="button"
                            onClick={logoutHandler}
                            className="btn btn-success"
                          >
                            Logout
                          </button>
                        </span>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default TopNav;
