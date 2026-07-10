import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function CliniciansEditor() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const docSnap = await getDoc(doc(db, "website", "clinician"));

            if (docSnap.exists()) {
                setData(docSnap.data());
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSaved(false);
    }

    function handleTestimonialChange(index, field, value) {
        const updatedTestimonials = [...data.testimonials];

        updatedTestimonials[index] = {
            ...updatedTestimonials[index],
            [field]: value,
        };

        setData((prev) => ({
            ...prev,
            testimonials: updatedTestimonials,
        }));

        setSaved(false);
    }

    async function handleSave() {
        try {
            setSaving(true);

            await updateDoc(doc(db, "website", "clinician"), data);

            setSaved(true);
        } catch (error) {
            console.error(error);
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="dashboard-section">

            <div className="dashboard-card">

                <h2>Clinicians Section</h2>

                <input
                    name="sectionLabel"
                    value={data.sectionLabel}
                    onChange={handleChange}
                    placeholder="Section Label"
                />

                <input
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <h3 className="editor-subtitle">
                    Testimonials
                </h3>

                <div className="testimonials-grid">

                    {data.testimonials.map((testimonial, index) => (

                        <div
                            className="testimonial-card"
                            key={index}
                        >

                            <h4>
                                Testimonial {index + 1}
                            </h4>

                            <input
                                type="text"
                                placeholder="Name"
                                value={testimonial.name}
                                onChange={(e) =>
                                    handleTestimonialChange(
                                        index,
                                        "name",
                                        e.target.value
                                    )
                                }
                            />

                            <input
                                type="text"
                                placeholder="Profession"
                                value={testimonial.profession}
                                onChange={(e) =>
                                    handleTestimonialChange(
                                        index,
                                        "profession",
                                        e.target.value
                                    )
                                }
                            />

                            <textarea
                                rows={5}
                                placeholder="Quote"
                                value={testimonial.quote}
                                onChange={(e) =>
                                    handleTestimonialChange(
                                        index,
                                        "quote",
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    ))}

                </div>

                <button
                    className="save-btn"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving ? "Saving..." : "Save Changes"}
                </button>

                {saved && (
                    <p className="saved-message">
                        Saved successfully!
                    </p>
                )}

            </div>

        </div>
    );
}

export default CliniciansEditor;