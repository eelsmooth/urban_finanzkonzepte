import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Formular extends Component {
    static displayName = Formular.name;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ name: "", email: "", message: "" })
    }

    render() {
        return (
            <div>
                <h2 class="centerText">Dein kostenloses Erstgespr&auml;ch</h2>
                <div class="centerText2"><b>Bitte f&uuml;lle dieses Formular aus, damit Alexander Urban oder jemand aus seinem Team dein erstes kostenloses Erstgespr&auml;ch mit dir f&uuml;hren kann.</b></div>
                <p><b>Wir besprechen:</b></p>
                <p><b>1.</b> Wie du 6- bis 7-stelliges Verm&ouml;gen aufbaust.</p>
                <p><b>2.</b> Wie du konkret die Strategie der oberen 1% anwenden kannst.</p>
                <p><b>3.</b> Wie du fr&uuml;her in Rente gehen kannst.</p>
                <div className="formDiv2">
                    <form id="contact-form" action="http://formspree.io/f/xzbwjrrz" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Vorname</label>
                            <input style={{ width: "300px" }} type="text" name="Vorname: " className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nachname</label>
                            <input style={{ width: "300px" }} type="text" name="Nachname: " className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">E-Mail-Adresse</label>
                            <input style={{ width: "300px" }} type="email" name="E-Mail-Adresse: " className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Geburtsdatum</label>
                            <input style={{ width: "300px" }} type="date" name="Geburtsdatum: " className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Handynummer</label>
                            <input style={{ width: "300px" }} type="number" name="Handynummer: " className="form-control"></input>
                        </div><br />
                        <button type="submit" value="Send" className="btn btn-primary">Absenden</button>
                    </form>
                </div>
                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                {this.state.matches && (
                    <div class="blkfooterX">
                        <div class="grid-container9">
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.de/service-faq/impressum.html">Impressum</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.eu/datenschutz.html">Datenschutz</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.instagram.com/agentur_urban/">Instagram</a>
                        </div>
                        <div class="newSkizz">
                            <p className="centerTextAlex">© 2022 Urban Finanzkonzepte. All Rights Reserved.</p>
                        </div>
                    </div>
                )}
                {!this.state.matches && (
                    <div class="blkfooterXForm">
                        <div class="grid-container9">
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.de/service-faq/impressum.html">Impressum</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.ovb.eu/datenschutz.html">Datenschutz</a>
                            <a className="whiteTextNew" style={{ textDecoration: 'none', color: 'white' }}
                                href="https://www.instagram.com/agentur_urban/">Instagram</a>
                        </div>
                        <div class="newSkizz">
                            <p className="centerTextAlex">&copy; 2022 Urban Finanzkonzepte. All Rights Reserved.</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
