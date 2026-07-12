import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase/firebase";


function FooterEditor() {
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
                doc(db, "website", "footer")
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
                doc(db, "website", "footer"),
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

                <h2>Footer Section</h2>

                <input
                    name="logoText"
                    value={data.logoText}
                    onChange={handleChange}
                    placeholder="Logo Text"
                />

                <input
                    name="copyright"
                    value={data.copyright}
                    onChange={handleChange}
                    placeholder="Copyright Text"
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

export default FooterEditor;