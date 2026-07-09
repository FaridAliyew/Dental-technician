import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../style/login.css'

import { auth } from "../firebase/firebase";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            setError("Email və ya parol yanlışdır.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <form
                className="login-form"
                onSubmit={handleSubmit}
            >
                <h2>Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                {error && (
                    <p className="login-error">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login;