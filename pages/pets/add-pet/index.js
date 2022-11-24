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
                Add Pet
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

                        <label htmlFor="Type">Type(Cat/Dog/etc)</label>
                        <input id="Type" required />

                        <label htmlFor="Breed">Breed</label>
                        <input id="Breed" required />

                        <label htmlFor="Age">Age</label>
                        <input id="Age" required />

                        <label htmlFor="Weight">Weight(in kg)</label>
                        <input id="Weight" required />

                        <label htmlFor="Color">Color</label>
                        <input id="Color" required />

                        <label htmlFor="Gender">Gender</label>
                        <input id="Gender" required />

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
