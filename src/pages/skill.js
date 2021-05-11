import React from 'react';

function Skill() {
    return (
        <div id="Skill" className="page">
            <div className="col-8 mx-auto">
                <div>SKILL</div>
                <div className="row">
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/html.png" />
                    </div>
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/css.png" />
                    </div>
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/js.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/react.png" />
                    </div>
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/ant.png" />
                    </div>
                    <div className="box-skill col-4">
                        <img className="skill-pic" src="/images/mysql.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;