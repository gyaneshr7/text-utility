import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode !== "light" ? "dark" : "light"
      } bg-${props.mode !== "light" ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex" style={{ marginRight: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={props.mode === "light" ? "green" : "white"}
              className="bi bi-circle-fill my-2"
              viewBox="0 0 16 16"
              cursor={"pointer"}
              onClick={() => {
                props.toggleMode("green");
              }}
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>

          <div className="d-flex" style={{ marginRight: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={props.mode === "light" ? "blue" : "white"}
              className="bi bi-circle-fill my-2"
              viewBox="0 0 16 16"
              cursor={"pointer"}
              onClick={() => {
                props.toggleMode("blue");
              }}
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode("dark");
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
};

export default Navbar;
