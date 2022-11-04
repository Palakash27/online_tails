import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import withHeaderAndFooter from "../hooks/withHeaderAndFooter";
import Carousel, { CarouselItem } from "../page-assets/carousel/carousel";

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

            <Carousel>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic1.jpg"
                        height="400px"
                        width="700px"
                        alt="pic1"
                    ></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic2.jpg"
                        height="400px"
                        width="700px"
                        alt="pic2"
                    ></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic3.jpg"
                        height="400px"
                        width="700px"
                        alt="pic3"
                    ></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic4.jpg"
                        height="400px"
                        width="700px"
                        alt="pic4"
                    ></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic5.jpg"
                        height="400px"
                        width="700px"
                        alt="pic5"
                    ></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src="/images/carousel/pic6.jpg"
                        height="400px"
                        width="700px"
                        alt="pic6"
                    ></Image>
                </CarouselItem>
            </Carousel>

            <div className={styles.container}>
                <Image
                    src="/images/mlogo.png"
                    alt="welcome"
                    width="80px"
                    height="70px"
                />
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(Home);
