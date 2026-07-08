import React from "react";
import "../style/footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className="footer-container">
                <a href="/" className="footer-logo">
                    <span className="footer-logo-letter">A</span>
                    <span className="footer-logo-text">Aurelia Dental Lab</span>
                </a>

                <p className="footer-copyright">
                    © {currentYear} Aurelia Dental Lab. Precision dental restorations.
                </p>
            </div>
        </footer>
    );
}

export default Footer;