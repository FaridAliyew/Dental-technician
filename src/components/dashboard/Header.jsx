import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";

function Header() {

    const { user } = useAuth();

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <header className="dashboard-header">

            <div>
                <h2>Dashboard</h2>
            </div>

            <div className="header-right">

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

export default Header;