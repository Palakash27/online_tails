import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <hr className="solid" />
            <div
                style={{
                    display: "flex",
                    padding: "0px 30px",
                }}
            >
                <div
                    style={{
                        flex: "2",
                        textAlign: "center",
                        paddingRight: "100px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <Image
                            src="/images/mlogo.png"
                            alt="welcome"
                            width="80px"
                            height="70px"
                        />
                        <h1
                            style={{
                                margin: "10px",
                            }}
                        >
                            Online Tails
                        </h1>
                    </div>
                    <div
                        style={{
                            textAlign: "left",
                        }}
                    >
                        <p>
                            We are committed to offering all of our pets with
                            cheap veterinarian services because we firmly think
                            that every pet deserves to receive the most basic
                            veterinary care.
                        </p>
                        <p>
                            All About Pets staff members genuinely enjoy their
                            work. Every member of our team has received
                            certification in discipline and training, and they
                            are all prepared to handle anything. We feel that
                            taking the time to get to know you and your pet
                            makes all the difference.
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                    }}
                >
                    <h3>Services</h3>

                    <p>Online Consultation</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Online Pharmacy</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Online Pet Store</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Online Pet Food</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Online Pet Accessories</p>
                </div>
                <div
                    style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                    }}
                >
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Services</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Blog</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Shop</p>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            margin: "0px 80px 0px 0px",
                        }}
                    />
                    <p>Contact Us</p>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0px 30px",
                    backgroundColor: "#2d2132",
                }}
            >
                <div>
                    <p>Copyrights @Group8 Online Tails. All rights reserved</p>
                </div>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <p
                        style={{
                            paddingRight: "20px",
                        }}
                    >
                        About Us
                    </p>
                    <p
                        style={{
                            paddingRight: "20px",
                        }}
                    >
                        Service
                    </p>
                    <p
                        style={{
                            paddingRight: "20px",
                        }}
                    >
                        Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}
