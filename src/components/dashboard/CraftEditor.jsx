import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import "../../style/craft-editor.css";

function CraftEditor() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const docSnap = await getDoc(doc(db, "website", "craft"));

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

    function handleFeatureChange(key, value) {
        setData((prev) => ({
            ...prev,
            features: [
                {
                    ...prev.features[0],
                    [key]: value,
                },
            ],
        }));

        setSaved(false);
    }

    async function handleSave() {
        try {
            setSaving(true);

            await updateDoc(doc(db, "website", "craft"), data);

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

                <h2>Craft Section</h2>

                <input
                    name="sectionLabel"
                    value={data.sectionLabel}
                    onChange={handleChange}
                    placeholder="Section Label"
                />

                <input
                    name="titleLine1"
                    value={data.titleLine1}
                    onChange={handleChange}
                    placeholder="Title Line 1"
                />

                <input
                    name="titleLine2"
                    value={data.titleLine2}
                    onChange={handleChange}
                    placeholder="Title Line 2"
                />

                <textarea
                    name="description"
                    rows={5}
                    value={data.description}
                    onChange={handleChange}
                    placeholder="Description"
                />

                <h3 style={{ margin: "25px 0 15px" }}>
                    Features
                </h3>

                {Object.entries(data.features?.[0] || {}).map(([key, value]) => (
                    <input
                        key={key}
                        type="text"
                        value={value}
                        placeholder={key}
                        onChange={(e) =>
                            handleFeatureChange(key, e.target.value)
                        }
                    />
                ))}

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

export default CraftEditor;