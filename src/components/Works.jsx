import React from "react";
import "../style/works.css";

const workflowSteps = [
    {
        number: "01",
        title: "Case submission",
        description:
            "Send a physical impression or upload an intraoral scan with your prescription and shade details.",
    },
    {
        number: "02",
        title: "Design & fabrication",
        description:
            "We design digitally, then fabricate and hand-finish your restoration to specification.",
    },
    {
        number: "03",
        title: "Quality control",
        description:
            "Marginal fit, occlusion and esthetics are checked under magnification before dispatch.",
    },
    {
        number: "04",
        title: "Delivery",
        description:
            "Cases are securely packaged and returned within your scheduled turnaround window.",
    },
];

function Works() {
    return (
        <section id="works">
            <div className="works-container">
                <div className="works-heading">
                    <span>How it works</span>

                    <h2>A simple, dependable workflow</h2>
                </div>

                <div className="works-grid">
                    {workflowSteps.map((step) => (
                        <article className="work-step" key={step.number}>
                            <span className="work-number">{step.number}</span>

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