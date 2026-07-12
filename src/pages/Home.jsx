import React from 'react'
import Navbar from '../components/Navbar'
import MasterDental from '../components/MasterDental'
import LaboServi from '../components/LaboServi'
import Craft from '../components/Craft'
import Works from '../components/Works'
import Clinician from '../components/Clinician'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { useWebsite } from "../context/WebsiteContext";
import Loading from "../components/Loading";

function Home() {

    const { loading } = useWebsite();

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar />
            <MasterDental />
            <LaboServi />
            <Craft />
            <Works />
            <Clinician />
            <Contact />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Home