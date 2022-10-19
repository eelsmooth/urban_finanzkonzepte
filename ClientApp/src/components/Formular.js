import React, { Component } from 'react';
import axios from 'axios';

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
                <h2 class="centerText">Dein kostenloses Erstgespräch</h2>
                <div class="centerText2"><b>Bitte f&uuml;lle dieses Formular aus, damit Alexander Urban oder jemand aus seinem Team dein erstes kostenloses Erstgespräch mit dir f&uuml; hren kann.</b></div>
                <p><b>Wir besprechen:</b></p>
                <p><b>1.</b> Wie du 6- bis 7-stelliges Vermögen aufbaust.</p>
                <p><b>2.</b> Wie du konkret die Strategie der oberen 1% anwenden kannst.</p>
                <p><b>3.</b> Wie du früher in Rente gehen kannst.</p>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
