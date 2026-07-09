import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        async function fetchFooter() {
            try {
                const docRef = doc(db, "website", "footer");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setFooterData(docSnap.data());
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchFooter();
    }, []);

    if (!footerData) {
        return <p className="loading-ser">Loading...</p>;
    }

    return (
        <footer id="footer">
            <div className="footer-container">

                <a href="/" className="footer-logo">
                    <span className="footer-logo-letter">A</span>

                    <span className="footer-logo-text">
                        {footerData.logoText}
                    </span>
                </a>

                <p className="footer-copyright">
                    © {currentYear} {footerData.logoText}.{" "}
                    {footerData.copyright}
                </p>

            </div>
        </footer>
    );
}

export default Footer;