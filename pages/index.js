import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import withHeaderAndFooter from "../hooks/withHeaderAndFooter";
import Testimonials from "../page-assets/Testimonial";
import HomepageCarousel from "../page-assets/homepage-carousel";

function Home() {
    return (
        <div
            style={{
                marginTop: "50px",
            }}
        >
            <hr className="solid" />
            <div>
                <Image
                    src="/images/header.png"
                    alt="image"
                    width="1800px"
                    height="700px"
                />
            </div>
            <div>
                <hr />
                <HomepageCarousel />
            </div>
            <div
                style={{
                    backgroundColor: "#2a2727",
                }}
            >
                <hr />
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "50px",
                        color: "yellow",
                    }}
                >
                    Testimonials
                </h1>
                <Testimonials />
            </div>
        </div>
    );
}

export default withHeaderAndFooter(Home);
