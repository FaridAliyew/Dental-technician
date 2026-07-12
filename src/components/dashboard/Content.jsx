import HeroEditor from "./HeroEditor";
import "../../style/content.css"
import ServicesEditor from "./ServicesEditor";
import CraftEditor from "./CraftEditor";
import WorksEditor from "./WorksEditor";
import CliniciansEditor from "./CliniciansEditor";
import ContactEditor from "./ContactEditor";
import FooterEditor from "./FooterEditor";

function Content({ selected }) {

    if (selected === "Hero") {
        return <HeroEditor />;
    }
    if (selected === "Services") {
        return <ServicesEditor />;
    }
    if (selected === "Craft") {
        return <CraftEditor />;
    }
    if (selected === "Works") {
        return <WorksEditor />;
    }
    if (selected === "Reviews") {
        return <CliniciansEditor /> ;
    }
    if (selected === "Contact") {
        return <ContactEditor /> ;
    }
    if (selected === "Footer") {
        return <FooterEditor /> ;
    }

    return (
        <div className="dashboard-content">
            <h1>{selected}</h1>

            <p>
                Burada "{selected}" bölməsi idarə olunacaq.
            </p>
        </div>
    );
}

export default Content;