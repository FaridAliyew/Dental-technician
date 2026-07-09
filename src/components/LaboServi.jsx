import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/labo-servi.css";

function LaboServi() {
    const [servicesData, setServicesData] = useState(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                const docRef = doc(db, "website", "services");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setServicesData(docSnap.data());
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchServices();
    }, []);

    if (!servicesData) {
        return <p className="loading-ser">Loading...</p>;
    }

    
    return (
        <section id="labo-servi">
            <div className="labo-servi-container">

                <div className="labo-servi-heading">
                    <span className="section-label">
                        {servicesData.sectionLabel}
                    </span>

                    <h2>{servicesData.title}</h2>

                    <p>{servicesData.description}</p>
                </div>

                <div className="lab-cards">
                    {servicesData.services.map((service) => (
                        <article className="lab-card" key={service.number}>
                            <span className="lab-card-number">
                                {service.number}
                            </span>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default LaboServi;