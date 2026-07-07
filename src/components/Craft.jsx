import React from "react";
import { FaCheck } from "react-icons/fa6";
import "../style/craft.css";
import craftImage from "../imgs/craft.jpg";

const craftFeatures = [
  "Custom shade matching under corrected daylight",
  "Micro-layered ceramics for natural depth and translucency",
  "Marginal fit verified under magnification",
  "Materials from certified, biocompatible sources",
];

function Craft() {
  return (
    <section id="craft">
      <div className="craft-container">
        <div className="craft-image">
          <img
            src={craftImage}
            alt="Handcrafted ceramic dental restorations"
          />
        </div>

        <div className="craft-content">
          <span className="craft-label">The craft</span>

          <h2>
            Every unit finished
            <br />
            by a ceramist&apos;s hand
          </h2>

          <p className="craft-description">
            Digital tools give us accuracy — but the final esthetics come from
            experience. Each restoration is characterized, glazed and polished
            individually so it disappears into the patient&apos;s natural smile.
          </p>

          <ul className="craft-features">
            {craftFeatures.map((feature) => (
              <li key={feature}>
                <span className="craft-check-icon">
                  <FaCheck aria-hidden="true" />
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