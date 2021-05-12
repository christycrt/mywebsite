import React from "react";

function About() {
  return (
    <div id="About" className="row align-items-center">
      <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-6 text-center">
            <img
              className="about-pic"
              src="/images/aboutpic.png"
              alt="aboutpic"
            />
          </div>
          <div className="col-6 my-auto">
            <div>
              <div className="aboutme-text">ABOUT ME</div>
              <div className="aboutme-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Dictum felis quam pellentesque duis. Dui, scelerisque eu
                <br />
                quis varius id. Non erat pretium odio consequat nisl in
                <br />
                aliquet mauris, ut. Egestas aliquet vitae malesuada morbi
                <br />
                vulputate purus in. Sit condimentum ac convallis massa est.
              </div>
              <div className="aboutme-detail">Name : Jeeranan Phaksongsri</div>
              <div className="aboutme-detail">Nickname : Christy</div>
              <div className="aboutme-detail">My hobbies</div>
              <img className="icon" src="/images/headphones.png" alt="music" />
              <img className="icon" src="/images/film.png" alt="movie" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
