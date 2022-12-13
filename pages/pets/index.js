import Image from "next/image";
import Link from "next/link";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";

function Pets() {
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
                    fontFamily: "Brush Script MT",
                    fontSize: "8vw",
                    textShadow:
                        "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                    margin: 0,
                }}
            >
                Pets
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
                    <Link href="/">
                        <div
                            style={{
                                margin: "10px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                className="home-card"
                                style={{
                                    position: "relative",
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/home.jpeg"
                                    alt="home-card"
                                    layout="fill"
                                />
                            </div>
                            <p>HOME</p>
                        </div>
                    </Link>
                    <Link href="/pets/alerts">
                        <div
                            style={{
                                margin: "10px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                className="alerts-card"
                                style={{
                                    position: "relative",
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/alerts.jpeg"
                                    alt="alerts-card"
                                    layout="fill"
                                />
                            </div>
                            <p>ALERTS</p>
                        </div>
                    </Link>
                    <Link href="/pets/add-pet">
                        <div
                            style={{
                                margin: "10px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                className="add-pet-card"
                                style={{
                                    position: "relative",
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/add-pet.jpeg"
                                    alt="add-pet-card"
                                    layout="fill"
                                />
                            </div>
                            <p>ADD PET</p>
                        </div>
                    </Link>
                </div>

                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <Link href="/pets/add-pet">
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
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/my-pets.jpeg"
                                    alt="my-pets-card"
                                    layout="fill"
                                />
                            </div>
                            <p>MY PETS</p>
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div
                            style={{
                                margin: "10px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                className="contact-card"
                                style={{
                                    position: "relative",
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/contact.jpeg"
                                    alt="contact-card"
                                    layout="fill"
                                />
                            </div>
                            <p>CONTACT</p>
                        </div>
                    </Link>
                    <Link href="/about-us">
                        <div
                            style={{
                                margin: "10px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                className="about-card"
                                style={{
                                    position: "relative",
                                    width: "500px",
                                    height: "500px",
                                }}
                            >
                                <Image
                                    src="/images/about.jpeg"
                                    alt="about-card"
                                    layout="fill"
                                />
                            </div>
                            <p>ABOUT</p>
                        </div>
                    </Link>
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(Pets);
