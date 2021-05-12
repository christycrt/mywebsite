import React from "react";

function Education() {
  return (
    <div id="Education" className="row align-items-center">
      <div>
        <div className="education-text text-center">EDUCATION</div>
        <div className="col-6 mx-auto">
          <div className="row align-items-center">
            <div className="col-4 ps-4">2011 - 2016</div>
            <div className="box col-1 p-0">
              <img
                className="gradcap"
                src="/images/graduate-cap.png"
                alt="educationpic"
              />
            </div>
            <div className="col-7 text-edu">
              <div className="text-left">
                <div className="topic-study">High school</div>
                <div>
                  Computer-Science
                  <br />
                  DEBSIRIN ROMKLAO
                </div>
              </div>
            </div>
            <div className="col-4 ps-4">2017 - now</div>
            <div className="box col-1 p-0">
              <img
                className="gradcap"
                src="/images/graduate-cap.png"
                alt="educationpic"
              />
            </div>
            <div className="col-7 text-edu">
              <div className="topic-study">
                Bachelor of science:
                <br />
                Information Technology
              </div>
              <div>
                School of Information Technology
                <br />
                King Mongkut's University of
                <br />
                Technology Thonburi (KMUTT)
                <br />
                GPAX : 2.85
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
