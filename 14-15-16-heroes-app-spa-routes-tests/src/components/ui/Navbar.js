import React, { useContext } from 'react'
import { AuthContext } from 'auth/AuthContext'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const {
    user: { name },
  } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HeroesApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
            <hr />
            <span className="nav-item nav-link text-info">{name}</span>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/login"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
