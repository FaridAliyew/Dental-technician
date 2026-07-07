import React from "react";
import "../style/master-dental.css";
import img1 from "../imgs/master-dental.png";

function MasterDental() {
    return (
        <section id="master-dental">
            <div className="master-dental-container">
                <div className="master-dental-content">
                    <div className="master-dental-badge">
                        <span className="badge-dot"></span>
                        Master dental technician
                    </div>

                    <h1>
                        Restorations
                        <br />
                        crafted with
                        <br />
                        <span>precision &amp; artistry</span>
                    </h1>

                    <p className="master-description">
                        Handcrafted crowns, veneers, bridges and full arch prosthetics
                        for dental practices — where CAD/CAM accuracy meets a ceramist&apos;s
                        eye for natural esthetics.
                    </p>

                    <div className="master-actions">
                        <a href="#request" className="primary-button">
                            Send a case
                        </a>

                        <a href="#services" className="secondary-button">
                            View services
                        </a>
                    </div>

                    <div className="master-stats">
                        <div className="stat-item">
                            <strong>18+</strong>
                            <span>Years at the bench</span>
                        </div>

                        <div className="stat-item">
                            <strong>40k+</strong>
                            <span>Units delivered</span>
                        </div>

                        <div className="stat-item">
                            <strong>48h</strong>
                            <span>Typical turnaround</span>
                        </div>
                    </div>
                </div>

                <div className="master-dental-image">
                    <img
                        src={img1}
                        alt="Dental technician crafting a ceramic dental restoration"
                    />
                </div>
            </div>
        </section>
    );
}

export default MasterDental;