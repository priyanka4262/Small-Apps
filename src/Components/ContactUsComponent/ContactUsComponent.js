import react, { Component } from "react";
import './ContactUsComponent.css';
import location from './location.png'
import phone from './phone-icon.png'

class ContactUsComponent extends Component {
    render() {
        return (
            <div className="rootDiv">
                <h1 className="title">How Can We Help You?</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet,
                mei in possit prompta consetetur.
                At usu appareat aliquando,
                feugiat mandamus consulatu has at.
                Ne vis scaevola salutatus disputando,
                te mediocrem conceptam nec.
                Cum meliore corpora inimicus ea,
                sea timeam oblique an,
                nam alia epicuri delectus no.
                       In est habeo saepe</p>
                <div className="details-container">
                    <div className="location-details">
                        <img className="location" src={location}></img>
                        <label className="label-a">OUR MAIN OFFICE</label>
                        <label className="label-b">SoHo 94 Broadway St New Work, NY 1001</label>
                    </div>
                    <div className="contact-details">
                        <img className="phone" src={phone}></img>
                        <label className="label-a">PHONE NUMBER</label>
                        <label className="label-d">234-9876-5400</label>
                        <label className="label-c">888-0123-4567(TOLL FREE)</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUsComponent;