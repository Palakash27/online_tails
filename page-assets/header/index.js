import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import app from "../../utility/firebase/firebaseobject";
import { getAuth } from "firebase/auth";
import signout from "../../utility/signout/signout";

export default function Header(props) {
    const auth = getAuth();
    const user = auth.currentUser;
    return (
        <div className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/appointment">Appointment</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/pets">Pets</Link>
            <Link href="https://www.project-disco.org/wp-content/uploads/2018/04/Android-logo.jpg">
                Download App
            </Link>
            <div
                style={{
                    float: "right",
                }}
            >
                {!user && <Link href="/login">Login</Link>}
                {!user && <Link href="/signup">Signup</Link>}
                {user && (
                    <Link href="/">
                        <a onClick={signout}>{user.email} signout?</a>
                    </Link>
                )}
            </div>
        </div>
    );
}
