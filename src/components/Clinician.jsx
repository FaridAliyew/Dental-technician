import React from "react";
import "../style/clinician.css";

const testimonials = [
  {
    quote:
      "The esthetics are consistently outstanding — anterior cases come back looking completely natural. My patients notice the difference.",
    name: "Dr. Elena Marsh",
    profession: "Cosmetic Dentist",
  },
  {
    quote:
      "Reliable turnaround and a marginal fit I rarely have to adjust chairside. Aurelia has become our only lab.",
    name: "Dr. James Okafor",
    profession: "Prosthodontist",
  },
  {
    quote:
      "Their communication on complex implant cases is excellent. It feels like having a technician in the practice.",
    name: "Dr. Priya Nair",
    profession: "Implant Surgeon",
  },
];

function Clinician() {
  return (
    <section id="clinician">
      <div className="clinician-container">
        <div className="clinician-heading">
          <span>Trusted by clinicians</span>
          <h2>What dentists say</h2>
        </div>

        <div className="clinician-cards">
          {testimonials.map((testimonial) => (
            <article
              className="clinician-card"
              key={testimonial.name}
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