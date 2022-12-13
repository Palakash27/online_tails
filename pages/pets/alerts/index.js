import Image from "next/image";
import Link from "next/link";
import withHeaderAndFooter from "../../../hooks/withHeaderAndFooter";

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
                Alerts
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
                <form
                    // onSubmit={handleSubmit}
                    style={{
                        maxWidth: "50%",
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="form-group"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <label htmlFor="Name">Name</label>
                        <input id="Name" required />

                        <label htmlFor="Type">Type of alert</label>
                        <select id="Type">
                            <option value="vaccination">Vaccination</option>
                            <option value="deworming">Deworming</option>
                            <option value="grooming">Grooming</option>
                            <option value="vet">Vet</option>
                        </select>

                        <label htmlFor="Date">Date</label>
                        <input id="Date" type="date" required />

                        <label htmlFor="Time">Time</label>
                        <input id="Time" type="time" required />

                        <label htmlFor="Notes">Notes</label>
                        <textarea id="Notes" />

                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#feac48",
                                padding: "10px",
                                marginTop: "20px",
                                borderRadius: "5px",
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <hr className="solid" />
        </div>
    );
}

export default withHeaderAndFooter(Pets);
