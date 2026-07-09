import HeroEditor from "./HeroEditor";
import "../../style/content.css"
import ServicesEditor from "./ServicesEditor";

function Content({ selected }) {

    if (selected === "Hero") {
        return <HeroEditor /> ;
    }
    if (selected === "Services") {
        return <ServicesEditor /> ;
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