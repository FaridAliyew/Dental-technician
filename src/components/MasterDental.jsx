import React, { useEffect, useState } from "react";
import "../style/master-dental.css";
import img1 from "../imgs/master-dental.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function MasterDental() {

    const [hero, setHero] = useState(null);

    useEffect(() => {

        const getHero = async () => {
            const docRef = doc(db, "website", "hero");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setHero(docSnap.data());
            } else {
                console.log("Document tapılmadı");
            }

        };

        getHero();

    }, []);

    if (!hero) {

        return <h2 className="loading">Loading...</h2>;

    }

    return (
        <section id="master-dental">
            <div className="master-dental-container">
                <div className="master-dental-content">
                    <div className="master-dental-badge">
                        <span className="badge-dot"></span>
                        {hero.badge}
                    </div>

                    <h1>
                        {hero.title1}
                        <br />
                        {hero.title2}
                        <br />
                        <span>{hero.title3}</span>
                    </h1>

                    <p className="master-description">
                        {hero.description}
                    </p>

                    <div className="master-actions">
                        <a href="#contact" className="primary-button">
                            {hero.primaryButton}
                        </a>

                        <a href="#labo-servi" className="secondary-button">
                            {hero.secondaryButton}
                        </a>
                    </div>

                    <div className="master-stats">
                        <div className="stat-item">
                            <strong>{hero.number1}+</strong>
                            <span>{hero.title4}</span>
                        </div>

                        <div className="stat-item">
                            <strong>{hero.number2}k+</strong>
                            <span>{hero.title5}</span>
                        </div>

                        <div className="stat-item">
                            <strong>{hero.number3}h</strong>
                            <span>{hero.title6}</span>
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