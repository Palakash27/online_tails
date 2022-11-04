import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";
import app from "../../utility/firebase/firebaseobject";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

function Signup() {
    const auth = getAuth();
    const user = auth.currentUser;
    const router = useRouter();
    if (user != null) {
        console.log("Somebody already signed in", user);
    }
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (!loading && user) router.push("/");
    }, [user, loading, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("user created", user);
                    router.push("/");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

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
                        Sign Up
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
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
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
                                {loading ? "Loading..." : "SIGN UP"}
                            </button>
                            {error && (
                                <div
                                    style={{
                                        color: "red",
                                        marginTop: "10px",
                                    }}
                                >
                                    {error}
                                </div>
                            )}
                            <p>
                                Already have an account?{" "}
                                <Link href="/login">
                                    <a style={{ color: "#feac48" }}>Login</a>
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
