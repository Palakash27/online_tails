import React, { useState, useEffect } from "react";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";

import { firestore } from "../../utility/firebase/firebaseobject";

import {
    collection,
    QueryDocumentSnapshot,
    DocumentData,
    query,
    where,
    limit,
    getDocs,
} from "@firebase/firestore";
import Image from "next/image";

function Appointment() {
    // const alertsCollection = collection(firestore, "alerts");
    // const [alerts, setAlerts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // const getAlerts = async () => {
    //     // construct a query to get up to 10 undone alerts
    //     const alertsQuery = query(
    //         alertsCollection,
    //         where("alert_type", "==", "vaccination"),
    //         limit(10)
    //     );
    //     // get the alerts
    //     const querySnapshot = await getDocs(alertsQuery);

    //     // map through alerts adding them to an array
    //     const result = [];
    //     querySnapshot.forEach((snapshot) => {
    //         result.push(snapshot);
    //     });
    //     // set it to state
    //     setAlerts(result);
    // };

    // useEffect(() => {
    //     // get the alerts
    //     getAlerts();
    //     // reset loading
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

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
                Appointments
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
                            className="home-card"
                            style={{
                                position: "relative",
                                width: "500px",
                                height: "500px",
                            }}
                        >
                            <Image
                                src="/images/appointments/app1.jpeg"
                                alt="home-card"
                                layout="fill"
                            />
                        </div>
                        <p>Vaccination Appointment</p>
                    </div>
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
                                src="/images/appointments/app2.jpeg"
                                alt="alerts-card"
                                layout="fill"
                            />
                        </div>
                        <p>Grooming Appointment</p>
                    </div>
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
                                src="/images/appointments/app3.jpeg"
                                alt="add-pet-card"
                                layout="fill"
                            />
                        </div>
                        <p>Vet Appointment</p>
                    </div>
                </div>
                {/*
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
                </div> */}
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(Appointment);
