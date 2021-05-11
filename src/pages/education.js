import React from 'react';

function Education() {
    return (
        <div id="Education" className="page">
            <div className="col-8 mx-auto">
                <div className="education-text text-center">EDUCATION</div>
                <div className="d-flex">
                    <div className="box col-4">2011 - 2016</div>
                    <img className="gradcap" src="/images/graduate-cap.png" alt="educationpic"/>
                    <div className="school-text">
                        <div className="topic-study">High school</div>
                        <div>
                            Computer-Science<br />
                            DEBSIRIN ROMKLAO
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="box col-4">2017 - now</div>
                    <img className="gradcap" src="/images/graduate-cap.png" alt="educationpic"/>
                    <div className="school-text">
                        <div className="topic-study">Bachelor of science:<br/>
                             Information Technology
                        </div>
                        <div>
                            School of Information Technology<br/>
                            King Mongkut's University of<br/>
                            Technology Thonburi (KMUTT)<br/>
                            GPAX : 2.85     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;