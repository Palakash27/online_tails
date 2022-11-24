import React from "react";
import styles from "../../styles/Home.module.css";
import withHeaderAndFooter from "../../hooks/withHeaderAndFooter";
import Image from "next/image";

function Contact() {
    return (
        <>
            <div className={styles.contact_info}>
                <div className="contact-fluid">
                    <div className="row">
                        <div
                            className="col-lg-10 offset-lg-1 d-flex justify-content-between"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div className={styles.contact_info_item}>
                                <Image
                                    src="/images/img.jpeg"
                                    alt="image"
                                    width="100px"
                                    height="90px"
                                />

                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +xxx(xxx)-xxxx
                                    </div>
                                </div>
                            </div>

                            <div className={styles.contact_info_item}>
                                <Image
                                    src="/images/emaillogo.jpeg"
                                    alt="image"
                                    width="100px"
                                    height="90px"
                                />

                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        Haman@conestogac.on.ca
                                    </div>
                                </div>
                            </div>

                            <div className={styles.contact_info_item}>
                                <Image
                                    src="/images/locationlogo.jpeg"
                                    alt="image"
                                    width="100px"
                                    height="90px"
                                />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        xxxx waterloo, N2V 2M8
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.contact_form}>
                <div className="container">
                    <div className="row">
                        <div className={styles.col}>
                            <div className={styles.contact_form_container}>
                                <div className={styles.contact_form_title}>
                                    <h3>Get In Touch with us</h3>
                                </div>
                                <form id={styles.contact_form}>
                                    <div className={styles.contact_form_name}>
                                        <input
                                            type="text"
                                            id="contact_form_name"
                                            className="contact_form_name input_field"
                                            placeholder="Your Name"
                                            required="true"
                                        />

                                        <input
                                            type="email"
                                            id="contact_form_email"
                                            className="contact_form_email input_field"
                                            placeholder="Your email"
                                            required="true"
                                        />

                                        <input
                                            type="number"
                                            id="contact_form_phone"
                                            className="contact_form_phone input_field"
                                            placeholder="Your phone number"
                                            required="true"
                                        />
                                    </div>
                                    <div className="contact_form_text mt-5">
                                        <textarea
                                            className={styles.text_field}
                                            placeholder="message"
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                    </div>
                                    <div className={styles.contact_form_button}>
                                        <button
                                            type="submit"
                                            className="button contact_submit_button"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withHeaderAndFooter(Contact);
