import React from "react";
import NavBar from "../components/home/navbar";

function Home() {
  return (
    <div id="Home">
      <NavBar />
      <div className="introduce-box col-10 mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6">
              <div className="home-text home-hi">Hi, I am</div>
              <div className="home-text home-name">Jeeranan Phaksongsri</div>
              <div className="home-text home-hi">Front-end Developer</div>
              <div className="home">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                  In tempus dolor egestas morbi mi at porttitor volutpat.
                </div>
              </div>
              <a class="btn btn-primary" href="#" role="button">Dowload resume</a>
          </div>
          <div className="profile-box col-12 col-sm-6">
            <img
              className="profile-pic"
              src="/images/homeimg.png"
              alt="homepic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
