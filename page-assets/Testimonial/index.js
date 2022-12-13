import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6000}
            >
                <div>
                    <Image
                        id="testimonials-img"
                        src="/images/shirley.png"
                        alt="shirley"
                        width={500}
                        height={500}
                    />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Pitbull owner</h4>
                        <p>Excellent customer service. Thank you!</p>
                    </div>
                </div>

                <div>
                    <Image
                        id="testimonials-img"
                        src="/images/daniel.png"
                        alt="daniel"
                        width={500}
                        height={500}
                    />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Cat Owner</h4>
                        <p>
                            I am overly pleased with Pet Supplies 4 Less! They
                            get my pet&apos;s meds to me fast.
                        </p>
                    </div>
                </div>

                <div>
                    <Image
                        id="testimonials-img"
                        src="/images/theo.png"
                        alt="theo"
                        width={500}
                        height={500}
                    />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Dog Owner</h4>
                        <p>
                            Positive experience. Friendly, knowledgeable
                            employees. Have ordered before and will order again
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}
