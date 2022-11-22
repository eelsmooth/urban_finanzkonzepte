import React, { Component } from 'react';
import ContactUs from './contactForm';

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
        console.log("e");
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
                <ContactUs />
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
