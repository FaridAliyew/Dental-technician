import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/clinician.css";

function Clinician() {
  const [clinicianData, setClinicianData] = useState(null);

  useEffect(() => {
    async function fetchClinician() {
      try {
        const docRef = doc(db, "website", "clinician");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setClinicianData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchClinician();
  }, []);

  if (!clinicianData) {
    return null;
  }

  return (
    <section id="clinician">
      <div className="clinician-container">

        <div className="clinician-heading">
          <span>{clinicianData.sectionLabel}</span>

          <h2>{clinicianData.title}</h2>
        </div>

        <div className="clinician-cards">
          {clinicianData.testimonials.map((testimonial, index) => (
            <article
              className="clinician-card"
              key={index}
            >
              <p className="testimonial-text">
                “{testimonial.quote}”
              </p>

              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>

                <span>{testimonial.profession}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clinician;