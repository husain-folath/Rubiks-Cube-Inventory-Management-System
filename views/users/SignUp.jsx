const React = require("react");

function SignUp(props) {
    return (
        <html>
        <head>
            <style>{`
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to bottom right, aliceblue, indigo);
                }
                .signup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .signup-card {
                    background-color: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    width: 400px;
                    text-align: center;
                }
                .signup-card h1 {
                    color: indigo;
                    margin-bottom: 20px;
                }
                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .signup-form input[type="text"],
                .signup-form input[type="email"],
                .signup-form input[type="password"],
                .signup-form select {
                    padding: 10px;
                    border-radius: 6px;
                    border: 1px solid #ccc;
                    font-size: 14px;
                }
                .signup-form input[type="submit"] {
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
                .signup-form input[type="submit"]:hover {
                    background-color: #4b0082;
                }
                .signup-links {
                    margin-top: 20px;
                    text-align: center;
                }
                .signup-links a {
                    color: indigo;
                    text-decoration: none;
                    font-weight: bold;
                }
                .signup-links a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </head>
        <body>
            <div className="signup-container">
                <div className="signup-card">
                    <h1>Sign up for the GOAT</h1>
                    <form className="signup-form" action="/users/signup" method="POST">
                        <input type="text" name="name" placeholder="Enter your name" required />
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <input type="password" name="password" placeholder="Enter your password" required />
                        <select name="role" required>
                            <option value="">Select a role</option>
                            <option value="Admin">Admin</option>
                            <option value="Staff">Staff</option>
                            {/* <option value="Customer">Customer</option> */}
                        </select>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="signup-links">
                        <a href="/users/signin">Already have an account? Sign In</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    );
}

module.exports = SignUp;
