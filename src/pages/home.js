import React from 'react';
import NavBar from '../components/home/navbar';

function Home() {
    return (
        <div id="Home">
            <NavBar />
            <div className="introduce-box col-10 mx-auto">
                <div className="row">
                    <div className="text-box col-6">
                        <div className="home-text home-hi">Hi, I am</div>
                        <div className="home-text home-name">Jeeranan Phaksongsri</div>
                        <div className="home-text home-hi">Front-end Developer</div>
                        <div  className="home">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div>In tempus dolor egestas morbi mi at porttitor volutpat.</div>
                        </div>
                        <button type="button" className="btn btn-warning">Download resume</button>
                    </div>
                    <div className="profile-box col-6">
                        <img className="profile-pic" src="/images/homeimg.png" alt="homepic" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;