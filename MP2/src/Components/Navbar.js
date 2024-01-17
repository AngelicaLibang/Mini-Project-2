/** @format */

import React, { Component } from "react";
import "../css/styles-navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
          <div className="container-fluid mt-0">
            {/* Logo/Brand */}
            <a className="navbar-brand" href="#">
              <img
                src={require("../img/Logo2.png")}
                className="img-fluid"
                alt="logo"
                style={{ width: "150px" }}
              />
            </a>

            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <form className="form-inline search-bar me-3">
                    <input
                      className="form-control search-input"
                      type="search"
                      placeholder="ex. Women top"
                      aria-label="Search"
                    />
                    <button id="nav-search" type="submit">
                      Search
                    </button>
                  </form>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      style={{ width: "30px" }}
                      src={require("../img/new-profile.png")}
                      alt="profile logo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      style={{ width: "26px" }}
                      src={require("../img/new-heart.png")}
                      alt="wishlist"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      style={{ width: "26px" }}
                      src={require("../img/new-support.png")}
                      alt="service logo"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      style={{ width: "26px" }}
                      src={require("../img/new-cart.png")}
                      alt="cart logo"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* space */}
        <div className="d-flex" style={{ height: "83px" }}>
          <div className="vr"></div>
        </div>

        {/* Carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../img/carousel1.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel2.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel3.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../img/carousel4.png")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
