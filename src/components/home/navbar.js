import React from 'react';

function NavBar() {
  return (
    <div id="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-10 mx-auto">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">CRT</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Education">EDUCATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Project">PROJECT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Skill">SKILL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-0" href="#Contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
