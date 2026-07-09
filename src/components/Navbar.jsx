import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "../style/navbar.css";

function Navbar() {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    async function fetchNavbar() {
      try {
        const docRef = doc(db, "website", "navbar");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNavbarData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchNavbar();
  }, []);

  if (!navbarData) {
    return null;
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <span className="logo-letter">A</span>

          <span className="logo-text">
            {navbarData.logoText}
          </span>
        </a>

        <div className="nav-items">
          {navbarData.navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="request-button"
        >
          {navbarData.buttonText}
        </a>

      </div>
    </header>
  );
}

export default Navbar;