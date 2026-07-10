import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";
function WorksEditor() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const docSnap = await getDoc(doc(db, "website", "works"));

            if (docSnap.exists()) {
                setData(docSnap.data());
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSaved(false);
    }

    function handleStepChange(index, field, value) {
        const updatedSteps = [...data.steps];

        updatedSteps[index] = {
            ...updatedSteps[index],
            [field]: value,
        };

        setData((prev) => ({
            ...prev,
            steps: updatedSteps,
        }));

        setSaved(false);
    }

    async function handleSave() {
        try {
            setSaving(true);

            await updateDoc(doc(db, "website", "works"), data);

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

                <h2>Works Section</h2>

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
                    Workflow Steps
                </h3>

                <div className="steps-grid">

                    {data.steps.map((step, index) => (
                        <div
                            className="step-card"
                            key={index}
                        >
                            <h4>
                                Step {index + 1}
                            </h4>

                            <input
                                type="text"
                                value={step.number}
                                placeholder="Number"
                                onChange={(e) =>
                                    handleStepChange(
                                        index,
                                        "number",
                                        e.target.value
                                    )
                                }
                            />

                            <input
                                type="text"
                                value={step.title}
                                placeholder="Title"
                                onChange={(e) =>
                                    handleStepChange(
                                        index,
                                        "title",
                                        e.target.value
                                    )
                                }
                            />

                            <textarea
                                rows={4}
                                value={step.description}
                                placeholder="Description"
                                onChange={(e) =>
                                    handleStepChange(
                                        index,
                                        "description",
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

export default WorksEditor;