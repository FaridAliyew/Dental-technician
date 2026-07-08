import React from "react";
import "../style/contact.css";

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <span className="contact-label">Get in touch</span>

                    <h2>Ready to send us a case?</h2>

                    <p className="contact-description">
                        New practices are welcome. Reach out for pricing, pickup
                        arrangements or to discuss a specific restoration.
                    </p>

                    <address className="contact-details">
                        <div className="contact-detail">
                            <span>Email</span>

                            <a href="mailto:cases@aureliadentallab.com">
                                cases@aureliadentallab.com
                            </a>
                        </div>

                        <div className="contact-detail">
                            <span>Phone</span>

                            <a href="tel:+15551234567">
                                +1 (555) 123-4567
                            </a>
                        </div>

                        <div className="contact-detail">
                            <span>Laboratory</span>

                            <p>
                                24 Meridian Works, Suite 3
                                <br />
                                Portland, OR 97204
                            </p>
                        </div>
                    </address>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Dr. Jane Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="practice">Practice</label>

                            <input
                                id="practice"
                                name="practice"
                                type="text"
                                placeholder="Doe Dental"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@practice.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="(555) 000-0000"
                            />
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="case-details">Case details</label>

                            <textarea
                                id="case-details"
                                name="caseDetails"
                                placeholder="Tell us about the restoration you need..."
                                rows="5"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit">
                        Submit inquiry
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;