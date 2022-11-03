import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
    return (
        <div className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/appointment">Appointment(TBD)</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/login">Login</Link>
            <Link href="/contact">Contact(TBD)</Link>
            <Link href="/about">About(TBD)</Link>
            <Link href="/pets">Pets</Link>
            <Link href="/">Signout</Link>
        </div>
    );
}
