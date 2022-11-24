import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";

function AboutUs() {
    return (
        <div
            style={{
                marginTop: "50px",
            }}
        >
            <hr className="solid" />
            <h1
                style={{
                    textAlign: "center",
                    color: "#f8eb25",
                    fontFamily: "fantasy",
                    fontSize: "8vw",
                    textShadow:
                        "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                    margin: 0,
                }}
            >
                About Us
            </h1>
            <div
                className="cards"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            margin: "10px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            className="logo"
                            style={{
                                position: "relative",
                                width: "300px",
                                height: "300px",
                            }}
                        >
                            <Image
                                src="/images/mlogo.png"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <div
                        className="my-pets-card"
                        style={{
                            position: "relative",
                            fontSize: "2vw",
                            fontFamily: "fantasy",
                        }}
                    >
                        <div>
                            <h3 style={{ color: "#f8eb25" }}>Pet Insurance</h3>
                            <p>
                                Is pet insurance the appropriate choice? We
                                think that making an educated selection is
                                always the best choice.
                            </p>
                            <h3 style={{ color: "#f8eb25" }}>Vaccination</h3>
                            <p>
                                In addition to assuring you that your dog or cat
                                is healthy, bringing them in for an annual
                                diagnostic and wellness checkup can aid in the
                                early detection of hidden diseases or problems.
                                Early diagnosis can increase the prognosis of
                                many diseases, reduce medical expenses, and
                                lengthen the life of your pet. Subtle changes in
                                their health or behaviour may be simple to miss
                                because many dogs and cats are adept at masking
                                symptoms of a problem. Additionally, some pets
                                with certain diseases don't exhibit any symptoms
                                at all.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            margin: "10px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            className="my-pets-card"
                            style={{
                                position: "relative",
                                fontSize: "2vw",
                                fontFamily: "fantasy",
                            }}
                        >
                            <p>
                                We are committed to offering all of our pets
                                with cheap veterinarian services because we
                                firmly think that every pet deserves to receive
                                the most basic veterinary care. All About Pets'
                                staff members genuinely enjoy their work. Every
                                member of our team has received certification in
                                discipline and training, and they are all
                                prepared to handle anything. We feel that taking
                                the time to get to know you and your pet makes
                                all the difference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(AboutUs);
