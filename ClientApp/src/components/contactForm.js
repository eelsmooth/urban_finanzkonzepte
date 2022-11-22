import emailjs from "emailjs-com";
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ContactUs() {

    let navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1s6mxtw', 'template_u8uh5jp', e.target, 'wq6xFfge0--72GPDd')
            .then((result) => {
                console.log(result.text);
                navigate("/submitted"); 
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-4 mx-2">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <b>Vorname</b>
                            <input required type="text" className="form-control" name="vorname" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <b>Nachname</b>
                            <input required type="text" className="form-control" name="nachname" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <b>E-Mail Adresse</b>
                            <input required type="email" className="form-control" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <b>Geburtsdatum</b>
                            <input required type="date" className="form-control" name="date" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <b>Handynummer</b>
                            <input required type="number" className="form-control" name="number" />
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