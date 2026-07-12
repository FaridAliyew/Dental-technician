import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";

function ContactEditor() {
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const docSnap = await getDoc(
                doc(db, "website", "contact")
            );

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

    async function handleSave() {
        try {
            setSaving(true);

            await updateDoc(
                doc(db, "website", "contact"),
                data
            );

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

                <h2>Contact Section</h2>

                <input
                    name="contactLabel"
                    value={data.contactLabel}
                    onChange={handleChange}
                    placeholder="Contact Label"
                />

                <input
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <textarea
                    rows={5}
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    placeholder="Description"
                />

                <input
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <input
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />

                <textarea
                    rows={3}
                    name="laboratory"
                    value={data.laboratory}
                    onChange={handleChange}
                    placeholder="Laboratory Address"
                />

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

export default ContactEditor;