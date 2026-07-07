import React from "react";
import "../style/labo-servi.css";

const laboratoryServices = [
    {
        number: "01",
        title: "Ceramic Crowns",
        description:
            "Layered and monolithic zirconia and lithium disilicate crowns with lifelike translucency and shade matching.",
    },
    {
        number: "02",
        title: "Porcelain Veneers",
        description:
            "Ultra-thin, hand-stacked veneers designed for anterior esthetics and seamless smile design.",
    },
    {
        number: "03",
        title: "Bridges",
        description:
            "Precision-fit fixed bridges engineered for strength, function and long-term durability.",
    },
    {
        number: "04",
        title: "Implant Prosthetics",
        description:
            "Screw-retained and cemented implant restorations, custom abutments and full arch solutions.",
    },
    {
        number: "05",
        title: "Removable Dentures",
        description:
            "Full and partial dentures with natural tooth arrangement and comfortable, stable fit.",
    },
    {
        number: "06",
        title: "Digital CAD/CAM",
        description:
            "Intraoral scan workflows, digital design and milling for consistent, repeatable accuracy.",
    },
];

function LaboServi() {
    return (
        <section id="labo-servi">
            <div className="labo-servi-container">
                <div className="labo-servi-heading">
                    <span className="section-label">What we make</span>

                    <h2>A full range of laboratory services</h2>

                    <p>
                        From a single anterior veneer to a complete implant-supported arch,
                        every case is finished by hand to exacting standards.
                    </p>
                </div>

                <div className="lab-cards">
                    {laboratoryServices.map((service) => (
                        <article className="lab-card" key={service.number}>
                            <span className="lab-card-number">{service.number}</span>

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