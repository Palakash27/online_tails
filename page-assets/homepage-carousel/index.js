import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class HomepageCarousel extends Component {
    render() {
        return (
            <Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic1.jpg"
                        height="400px"
                        width="700px"
                        alt="pic1"
                    ></Image>
                </div>
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic2.jpg"
                        height="400px"
                        width="700px"
                        alt="pic2"
                    ></Image>
                </div>
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic3.jpg"
                        height="400px"
                        width="700px"
                        alt="pic3"
                    ></Image>
                </div>
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic4.jpg"
                        height="400px"
                        width="700px"
                        alt="pic4"
                    ></Image>
                </div>
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic5.jpg"
                        height="400px"
                        width="700px"
                        alt="pic5"
                    ></Image>
                </div>
                <div>
                    <Image
                        id="hp-carousel"
                        src="/images/carousel/pic6.jpg"
                        height="400px"
                        width="700px"
                        alt="pic6"
                    ></Image>
                </div>
            </Carousel>
        );
    }
}
