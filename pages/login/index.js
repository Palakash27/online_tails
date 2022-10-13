import Image from "next/image";
import Link from "next/link";
import React from "react";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";

function Signup() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
        } else {
            try {
                const res = await fetch("/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });
                const data = await res.json();
                if (data.error) {
                    setError(data.error);
                } else {
                    setError("");
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                }
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        }
    };

    return (
        <div
            className=""
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100vh",
                backgroundColor: "white",
                color: "black",
            }}
        >
            <div
                className="left-section"
                style={{
                    flex: 1,
                    position: "relative",
                }}
            >
                <Image src="/images/dog.webp" alt="logo" layout="fill" />
            </div>
            <div
                className="right-section"
                style={{
                    flex: 1,
                    padding: "20px",
                }}
            >
                <div className="form-container">
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#feac48",
                            fontFamily: "Brush Script MT",
                            fontSize: "8vw",
                            textShadow:
                                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                        }}
                    >
                        Login In
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: "50%",
                            margin: "0 auto",
                        }}
                    >
                        <div
                            className="form-group"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    backgroundColor: "#feac48",
                                    padding: "10px",
                                    marginTop: "20px",
                                    borderRadius: "5px",
                                }}
                            >
                                {loading ? "Loading..." : "LOGIN"}
                            </button>
                            <p>
                                Don&apos;t have an account?{" "}
                                <Link href="/signup">
                                    <a style={{ color: "#feac48" }}>Sign Up</a>
                                </Link>
                            </p>

                            {error && <p className="error">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withHeaderAndFooter(Signup);
