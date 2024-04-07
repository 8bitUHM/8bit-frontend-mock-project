import * as React from "react";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <div className="navbar fixed-top navbar-expand-xl border-bottom bg-white">
        <div className="container">
          <a href="./" className="navbar-brand">
            <img
              src="./assets/8bit_logo.webp"
              height="65"
              className="d-inline-block align-top shadow bg-white rounded"
              alt=""
            ></img>
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav navbar-right pt-2">
              <li className="nav-item">
                <a href="./" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="./programming-languages.html" className="nav-link">
                  Programming Languages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
