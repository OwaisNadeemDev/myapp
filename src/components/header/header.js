import React from "react";
import logo from "../../assets/images/logo.PNG";
import "./header.css";

const Header = () => (
  <div className="header sticky-top ">
    <header className="navbar  navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="index">
          <img src={logo} alt="logo" />
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="indexnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search_btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <div className="location d-flex align-items-center justify-content-between ">
          <div>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2>California</h2>
        </div>

        <div className="menu ml-auto mr-5">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="index"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="index">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="index">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <nav className="d-flex align-items-center gap-2" >
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Electronic & Media
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home & Garden
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clothing, Shoes, & Accessories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Baby & Kids
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vehicles
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Toys, Games, & Hobbies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sports & Outdoors
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collectables & Arts
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="index" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pet Supplies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="index">Action</a></li>
            <li><a className="dropdown-item" href="index">Another action</a></li>
            <li><a className="dropdown-item" href="index">Something else here</a></li>
          </ul>
        </li>



    </nav>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
