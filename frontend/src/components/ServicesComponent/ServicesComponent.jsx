
import React from "react";
import "./ServicesComponent.css"; // Import CSS file for component styling
import Diagnosis from "../../assets/images/Diagnosis.png";
import vedioCall from "../../assets/images/vedioCall.png";
import diseasePrediction from "../../assets/images/diseasePrediction.png";
//import logo from "../../assets/images/logo.png";
//import logo from "../../assets/images/logo.png";
//import logo from "../../assets/images/logo.png";



const ServicesComponent = () => {
    return (
        <div className="services-container">
            {/* Service Item 1 */}
            <div className="service-item">
                <img src={Diagnosis} alt="Service 1" className="service-image" />
                <div className="service-description">
                    <h3>Diagnosis Prediction</h3>
                    <p>AI driven diagnosis prediction based on symptoms</p>
                </div>
            </div>

            {/* Service Item 2 */}
            <div className="service-item">
                <img src={diseasePrediction} alt="Service 2" className="service-image" />
                <div className="service-description">
                    <h3>Disease Prediction</h3>
                    <p>AI driven disease prediction based on symptoms and diagnosis</p>
                </div>
            </div>

            
            {/* Service Item 3 */}
            <div className="service-item">
                <img src={vedioCall} alt="Service 2" className="service-image" />
                <div className="service-description">
                    <h3>Vedio Call</h3>
                    <p>Consultation with doctors through vedio call</p>
                </div>
            </div>

            {/* Service Item 4 */}
            <div className="service-item">
                <img src={diseasePrediction} alt="Service 2" className="service-image" />
                <div className="service-description">
                    <h3>Daily Monetoring</h3>
                    <p>Daily personalised reporting</p>
                </div>
            </div>

            {/* Service Item 5 */}
            <div className="service-item">
                <img src={diseasePrediction} alt="Service 2" className="service-image" />
                <div className="service-description">
                    <h3>Appointment </h3>
                    <p>Appointment booking based on availability</p>
                </div>
            </div>

            {/* Service Item 6 */}
            <div className="service-item">
                <img src={diseasePrediction} alt="Service 2" className="service-image" />
                <div className="service-description">
                    <h3>Personalised medication</h3>
                    <p>Provide personalised treatment</p>
                </div>
            </div>

        </div>
    );
};

export default ServicesComponent;
