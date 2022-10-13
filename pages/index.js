import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <h3>PAW CLINIC</h3>

                        <img
                            src="/images/mlogo.png"
                            alt="logo"
                            height={60}
                            width={60}
                        />
                    </div>
                    <ul>
                        <li>
                            <Link href="">HOME</Link>
                        </li>
                        <li>
                            <Link href="/login">LOGIN</Link>
                        </li>
                        <li>
                            <Link href="/signup">SIGNUP</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr className="solid" />
            <div className="container">
                <img
                    className="container_image"
                    src="images/mlogo.png"
                    alt="welcome"
                />
                <div className="content">
                    <h2>Lorem Ispum</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h2>Lorem Ispum</h2>
                    <p>
                        1. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        2. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.{" "}
                    </p>
                    <p>
                        3. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        4. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        5. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        6. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <hr className="solid" />
        </div>
    );
}
