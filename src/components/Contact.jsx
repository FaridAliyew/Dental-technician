import { useState } from "react";
import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import "../style/contact.css";

const initialFormData = {
    name: "",
    practice: "",
    email: "",
    phone: "",
    caseDetails: "",
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        setSubmitStatus({
            type: "",
            message: "",
        });

        try {
            await addDoc(collection(db, "contactRequests"), {
                name: formData.name.trim(),
                practice: formData.practice.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                caseDetails: formData.caseDetails.trim(),
                createdAt: serverTimestamp(),
            });

            setFormData(initialFormData);

            setSubmitStatus({
                type: "success",
                message: "Sorğunuz uğurla göndərildi.",
            });
        } catch (error) {
            console.error("Sorğu göndərilərkən xəta yarandı:", error);

            setSubmitStatus({
                type: "error",
                message: "Sorğunu göndərmək mümkün olmadı. Yenidən cəhd edin.",
            });
        } finally {
            setIsSubmitting(false);
        }
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
                                value={formData.name}
                                onChange={handleChange}
                                maxLength={100}
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
                                value={formData.practice}
                                onChange={handleChange}
                                maxLength={150}
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
                                value={formData.email}
                                onChange={handleChange}
                                maxLength={150}
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
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength={30}
                            />
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="case-details">Case details</label>

                            <textarea
                                id="case-details"
                                name="caseDetails"
                                placeholder="Tell us about the restoration you need..."
                                value={formData.caseDetails}
                                onChange={handleChange}
                                minLength={5}
                                maxLength={2000}
                                rows={5}
                                required
                            />
                        </div>
                    </div>

                    {submitStatus.message && (
                        <p
                            className={`form-status ${submitStatus.type}`}
                            role="status"
                        >
                            {submitStatus.message}
                        </p>
                    )}

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit inquiry"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;