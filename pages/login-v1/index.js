export default function Login() {
    return (
        <div className="main1">
            <div className="main2">
                <div>
                    <div className="image">
                        <div className="ctr-image">
                            {/* <img src={profile} alt="abc" className="profile" /> */}
                        </div>
                    </div>

                    <div>
                        <h1>Login Page</h1>
                    </div>
                    <div>
                        {/* <img src={E - Mail} alt="email" className="email" /> */}
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="name"
                        />
                    </div>
                    <div className="input2">
                        {/* <img src={psw} alt="psw" className="psw" /> */}
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="name"
                        />
                    </div>
                    <div className="login-btn">
                        <button>Login</button>
                    </div>

                    <p className="linkage">
                        <a href="#">Password Forget ?</a> OR{" "}
                        <a href="#">Sign Up ?</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
