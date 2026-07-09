import { useAuth } from "../../context/AuthContext";
import "../../style/topbar.css"

function Topbar() {

    const { user, logout } = useAuth();

    return (
        <header className="dashboard-topbar">

            <h2>Dashboard</h2>

            <div className="topbar-right">

                <span>
                    {user?.email}
                </span>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </header>
    );
}

export default Topbar;