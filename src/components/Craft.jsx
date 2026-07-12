import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/craft.css";
import craftImage from "../imgs/craft.jpg";

function Craft() {
  const [craftData, setCraftData] = useState(null);

  useEffect(() => {
    async function fetchCraft() {
      try {
        const docRef = doc(db, "website", "craft");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCraftData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchCraft();
  }, []);

  if (!craftData) {
    return null;
  }

  const featureList = Object.values(craftData.features[0]);

  return (
    <section id="craft">
      <div className="craft-container">

        <div className="craft-image">
          <img
            src={craftImage}
            alt={craftData.titleLine1}
          />
        </div>

        <div className="craft-content">

          <span className="craft-label">
            {craftData.sectionLabel}
          </span>

          <h2>
            {craftData.titleLine1}
            <br />
            {craftData.titleLine2}
          </h2>

          <p className="craft-description">
            {craftData.description}
          </p>

          <ul className="craft-features">
            {featureList.map((feature, index) => (
              <li key={index}>
                <span className="craft-check-icon">
                  <FaCheck />
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Craft;