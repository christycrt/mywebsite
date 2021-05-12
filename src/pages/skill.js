import React from "react";

function Skill() {
  return (
    <div id="Skill" className="row align-items-center">
      <div className="col-8 mx-auto">
        <div className="project-topic text-center">SKILL</div>
          <div className="row">
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/html.png" />
              </div>
            </div>
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/css.png" />
              </div>
            </div>
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/js.png" />
              </div>
            </div>
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/react.png" />
              </div>
            </div>
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/ant.png" />
              </div>
            </div>
            <div className="col-4 px-3 py-3">
              <div className="box-skill">
                <img className="skill-pic" src="/images/mysql.png" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
