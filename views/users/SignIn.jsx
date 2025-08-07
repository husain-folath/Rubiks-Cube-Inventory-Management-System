const React = require("react");

function SignIn(props) {
    return (
        <html>
            <head>
                <style>{`
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to bottom right, aliceblue, indigo);
                }
                .signin-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .signin-card {
                    background-color: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    width: 350px;
                    text-align: center;
                }
                .signin-card h1 {
                    color: indigo;
                    margin-bottom: 20px;
                }
                .signin-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .signin-form input[type="email"],
                .signin-form input[type="password"] {
                    padding: 10px;
                    border-radius: 6px;
                    border: 1px solid #ccc;
                    font-size: 14px;
                }
                .signin-form input[type="submit"] {
                    background-color: indigo;
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .signin-form input[type="submit"]:hover {
                    background-color: #4b0082;
                }
                .signin-links {
                    margin-top: 20px;
                    text-align: center;
                }
                .signin-links a {
                    color: indigo;
                    text-decoration: none;
                    font-weight: bold;
                }
                .signin-links a:hover {
                    text-decoration: underline;
                }
            `}</style>
            </head>
            <body>
                <div className="signin-container">
                    <div className="signin-card">
                        <h1>Sign in</h1>
                        <form className="signin-form" action="/users/signin" method="POST">
                            <input type="email" name="email" placeholder="Enter your email" required />
                            <input type="password" name="password" placeholder="Enter your password" required />
                            <input type="submit" value="Sign In" />
                        </form>
                        <div className="signin-links">
                            <a href="/users/Signup">Don’t have an account? Sign Up</a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

module.exports = SignIn;
