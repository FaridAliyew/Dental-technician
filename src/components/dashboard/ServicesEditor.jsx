import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import "../../style/servicesEditor.css";

function ServicesEditor() {
    const [servicesData, setServicesData] = useState({
        sectionLabel: "",
        title: "",
        description: "",
        services: [],
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "website", "services");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setServicesData(docSnap.data());
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setServicesData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleServiceChange = (index, field, value) => {
        const updatedServices = [...servicesData.services];

        updatedServices[index][field] = value;

        setServicesData((prev) => ({
            ...prev,
            services: updatedServices,
        }));
    };

    const handleSave = async () => {
        try {
            setSaving(true);

            await updateDoc(
                doc(db, "website", "services"),
                servicesData
            );

            alert("Services updated successfully.");
        } catch (error) {
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="services-editor">

            <h2>Services Section</h2>

            <div className="editor-card">

                <label>Section Label</label>

                <input
                    name="sectionLabel"
                    value={servicesData.sectionLabel}
                    onChange={handleChange}
                />

                <label>Title</label>

                <input
                    name="title"
                    value={servicesData.title}
                    onChange={handleChange}
                />

                <label>Description</label>

                <textarea
                    rows="4"
                    name="description"
                    value={servicesData.description}
                    onChange={handleChange}
                />

            </div>

            <h2 className="service-heading">
                Service Cards
            </h2>
        
            {servicesData.services.map((service, index) => (

                <div
                    className="editor-card"
                    key={index}
                >

                    <h3>
                        Service {index + 1}
                    </h3>

                    <label>Number</label>

                    <input
                        value={service.number}
                        onChange={(e) =>
                            handleServiceChange(
                                index,
                                "number",
                                e.target.value
                            )
                        }
                    />

                    <label>Title</label>

                    <input
                        value={service.title}
                        onChange={(e) =>
                            handleServiceChange(
                                index,
                                "title",
                                e.target.value
                            )
                        }
                    />

                    <label>Description</label>

                    <textarea
                        rows="3"
                        value={service.description}
                        onChange={(e) =>
                            handleServiceChange(
                                index,
                                "description",
                                e.target.value
                            )
                        }
                    />

                </div>

            ))}

            <button
                className="save-btn"
                onClick={handleSave}
                disabled={saving}
            >
                {saving ? "Saving..." : "Save Changes"}
            </button>

        </div>
    );
}

export default ServicesEditor;