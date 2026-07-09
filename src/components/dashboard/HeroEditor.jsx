import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "../../style/hero-editor.css"

function HeroEditor() {
    const [formData, setFormData] = useState({
        badge: "",
        description: "",

        title1: "",
        title2: "",
        title3: "",

        title4: "",
        title5: "",
        title6: "",

        number1: 0,
        number2: 0,
        number3: 0,

        primaryButton: "",
        secondaryButton: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchHero() {
            try {
                const docRef = doc(db, "website", "hero");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setFormData(docSnap.data());
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchHero();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                name.startsWith("number")
                    ? Number(value)
                    : value,
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage("");

        try {
            await updateDoc(doc(db, "website", "hero"), formData);

            setMessage("Saved successfully.");
        } catch (error) {
            console.error(error);

            setMessage("Error while saving.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="hero-editor">

            <h2>Hero Section</h2>

            <input
                name="badge"
                value={formData.badge}
                onChange={handleChange}
                placeholder="Badge"
            />

            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Description"
            />

            <input
                name="title1"
                value={formData.title1}
                onChange={handleChange}
                placeholder="Title 1"
            />

            <input
                name="title2"
                value={formData.title2}
                onChange={handleChange}
                placeholder="Title 2"
            />

            <input
                name="title3"
                value={formData.title3}
                onChange={handleChange}
                placeholder="Title 3"
            />

            <input
                name="title4"
                value={formData.title4}
                onChange={handleChange}
                placeholder="Title 4"
            />

            <input
                name="title5"
                value={formData.title5}
                onChange={handleChange}
                placeholder="Title 5"
            />

            <input
                name="title6"
                value={formData.title6}
                onChange={handleChange}
                placeholder="Title 6"
            />

            <input
                type="number"
                name="number1"
                value={formData.number1}
                onChange={handleChange}
                placeholder="Number 1"
            />

            <input
                type="number"
                name="number2"
                value={formData.number2}
                onChange={handleChange}
                placeholder="Number 2"
            />

            <input
                type="number"
                name="number3"
                value={formData.number3}
                onChange={handleChange}
                placeholder="Number 3"
            />

            <input
                name="primaryButton"
                value={formData.primaryButton}
                onChange={handleChange}
                placeholder="Primary Button"
            />

            <input
                name="secondaryButton"
                value={formData.secondaryButton}
                onChange={handleChange}
                placeholder="Secondary Button"
            />

            <button
                onClick={handleSave}
                disabled={saving}
            >
                {saving ? "Saving..." : "Save"}
            </button>

            {message && <p>{message}</p>}

        </div>
    );
}

export default HeroEditor;