import Sidebar from "../components/dashboard/Sidebar";
import Content from "../components/dashboard/Content";
import Topbar from "../components/dashboard/Topbar";
import "../style/dashboard.css"

import { useState } from "react";

function Dashboard() {

    const [selected, setSelected] = useState("Hero");

    return (

        <div className="dashboard">

            <Topbar />

            <div className="dashboard-body">

                <Sidebar
                    selected={selected}
                    setSelected={setSelected}
                />

                <Content
                    selected={selected}
                />

            </div>

        </div>

    );
}

export default Dashboard;