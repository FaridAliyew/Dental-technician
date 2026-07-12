import { createContext, useContext, useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

const WebsiteContext = createContext();

export function WebsiteProvider({ children }) {
    const [websiteData, setWebsiteData] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadWebsite();
    }, []);

    async function loadWebsite() {
        try {
            setLoading(true);

            const documentNames = [
                "navbar",
                "hero",
                "services",
                "craft",
                "works",
                "clinician",
                "contact",
                "footer",
            ];

            const promises = documentNames.map((name) =>
                getDoc(doc(db, "website", name))
            );

            const snapshots = await Promise.all(promises);

            const result = {};

            snapshots.forEach((snapshot, index) => {
                if (snapshot.exists()) {
                    result[documentNames[index]] = snapshot.data();
                }
            });

            setWebsiteData(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <WebsiteContext.Provider
            value={{
                websiteData,
                loading,
                reloadWebsite: loadWebsite,
            }}
        >
            {children}
        </WebsiteContext.Provider>
    );
}

export function useWebsite() {
    return useContext(WebsiteContext);
}