import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import withHeaderAndFooter from "../hooks/withHeaderAndFooter";

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
            <div className={styles.container}>
                <Image
                    src="/images/mlogo.png"
                    alt="welcome"
                    width="80px"
                    height="70px"
                />
                <div className={styles.content}>
                    <h2>DOGS</h2>
                    <p>
                        No matter what kind or number of pets you have. This
                        application is going to make your life a piece of cake
                        with maintaining records.
                    </p>
                    <p>
                        2. This website is under development version and
                        requires a user to log in to view the pet-related
                        dashboard and the number of pets any user has.{" "}
                    </p>
                    <p>
                        3. A dog’s sense of smell is so precise, it could detect
                        a teaspoon of sugar in a million gallons of water, or
                        two Olympic-sized pools worth. A dog’s nose print is
                        unique, much like a person’s fingerprint. When dogs kick
                        backward after they go to the bathroom it’s not to cover
                        it up, but to mark their territory, using the scent
                        glands in their feet.
                    </p>
                    <div>
                        4. Interesting cat facts:
                        <ul>
                            <li>
                                A cat has 32 muscles in each ear, humans only
                                have 6.
                            </li>
                            <li>Cats spend 15-20% of their time grooming.</li>
                            <li>Cats have more than 100 vocal sounds.</li>
                            <li>
                                A young, healthy, average-sized cat can jump
                                about six times their length or over eight feet
                                in a single bound.{" "}
                            </li>
                            <li>
                                Cats have a sensory organ at the end of their
                                whiskers called a proprioceptor, which sends
                                tactile signals to the brain and nervous system.
                            </li>
                            <li>
                                Cats are able to rotate their supple spines more
                                than many other animals and can twist their
                                bodies to a much greater extent.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(Home);
