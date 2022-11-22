import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1s6mxtw', 'template_u8uh5jp', e.target, 'wq6xFfge0--72GPDd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input required type="text" className="form-control" placeholder="Vorname" name="vorname" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input required type="text" className="form-control" placeholder="Nachname" name="nachname" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input required type="email" className="form-control" placeholder="E-Mail Adresse" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input required type="date" className="form-control" placeholder="Geburtsdatum" name="date" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input required type="number" className="form-control" placeholder="Handynummer" name="number" />
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-warning" value="Absenden"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}