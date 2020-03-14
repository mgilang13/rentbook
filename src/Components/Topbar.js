import React from "react";
import "./topbar.css";
import { FaBars } from "react-icons/fa";

const Topbar = () => {
  const toggleClass = () => {
    const oldNameClass = document.getElementById("wrapper").className;
    const newNameClass =
      oldNameClass === "d-flex" ? "d-flex toggled" : "d-flex";
    document.getElementById("wrapper").className = newNameClass;
  };
  return (
    <nav className="nav topbar shadow pt-3 pb-3 navbar-expand-lg">
      <div className="col-md-2">
        <button className="btn" id="menu-toggle" onClick={toggleClass}>
          <FaBars />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <form className="mx-auto col-md-5" id="navbarSupportedContent">
        <div className="form-row align-items-center">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-dark"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-dark"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Time
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
          <div className="col ml-5">
            <input
              type="text"
              className="form-control rounded-pill"
              id="inlineFormInput"
              placeholder="Search"
            />
          </div>
        </div>
      </form>
    </nav>
  );
};

export default Topbar;
