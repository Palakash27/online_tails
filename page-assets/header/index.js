import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
    return (
        <div className={styles.header}>
            <Link href="/">Home</Link>
            <Link href="/appointment">Appointment</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
        </div>
    );
}
