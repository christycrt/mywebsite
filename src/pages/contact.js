import React from 'react';

function Contact() {
    return (
        <div id="Contact" className="row align-items-center">
            <div className="col-4 mx-auto">
                <div className="text-center contact-topic">CONTACT</div>
                    <div className="contact-detail">
                        <img className="icon" src="/images/github.png" />
                        <span>christycrt</span>
                    </div>
                    <div className="contact-detail">
                        <img className="icon" src="/images/phone-call.png" />
                        <span>0922570180</span>
                    </div>
                    <div className="contact-detail">
                        <img className="icon" src="/images/email.png" />
                        <span>jeeranan.phaksongsri@gmail.com</span>
                    </div>
            </div>
        </div>
    )
}

export default Contact;