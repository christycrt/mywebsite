import React from "react";

function Project() {
  return (
    <div id="Project" className="row align-items-center">
      <div className="col-10 mx-auto">
        <div className="project-topic">SENIOR PROJECT</div>
        <div className="row project">
          <div className="col-8">
            <img className="w-100" src="/images/cover-port.png" alt="project" />
          </div>
          <div className="col-4">
            <div className="box-project">
              <div className="annoucer-topic text-center">ANNOUNCER</div>
              <div className="project-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. feugiat
                euismod sapien lectus. Non mollis tortor libero interdu at quam
                sit. Curabitur quis felis donec at eget netus egestas fe cursus.
                Aliquam bibendum ut lo rem mauris, posuere. Elemenm nunc nibh
                consequat venenatis massa molestie dui.
              </div>
            </div>
          </div>
        </div>
        <a class="btn btn-primary" href="https://seniorproject.sit.kmutt.ac.th/showproject/IT60-BU55" role="button">Go to project website</a>
      </div>
    </div>
  );
}

export default Project;
