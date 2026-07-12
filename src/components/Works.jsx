import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/works.css";

function Works() {
    const [worksData, setWorksData] = useState(null);

    useEffect(() => {
        async function fetchWorks() {
            try {
                const docRef = doc(db, "website", "works");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setWorksData(docSnap.data());
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchWorks();
    }, []);

    if (!worksData) {
        return null;
    }

    return (
        <section id="works">
            <div className="works-container">

                <div className="works-heading">
                    <span>{worksData.sectionLabel}</span>

                    <h2>{worksData.title}</h2>
                </div>

                <div className="works-grid">
                    {worksData.steps.map((step) => (
                        <article
                            className="work-step"
                            key={step.number}
                        >
                            <span className="work-number">
                                {step.number}
                            </span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Works;