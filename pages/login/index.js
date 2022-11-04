import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";
import app from "../../utility/firebase/firebaseobject";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

function Login() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const auth = getAuth();
    const user = auth.currentUser;
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) router.push("/");
    }, [user, loading, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("user logged in", user);
                router.push("/");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        setLoading(false);
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
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                required
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

export default withHeaderAndFooter(Login);
