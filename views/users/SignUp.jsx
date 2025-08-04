const React=require("react")

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// })


function SignUp (props) {
    return(
        <div>
            <h1>Sign up for the GOAT.</h1>
            <form action="/users/signup" method="POST">
                Name: <input type="text" name="name" /><br/>
                email: <input type="email" name="email" /><br/>
                password: <input type="password" name="password" /><br/>
                <select name="role" >
                    <option value="">Select a role</option>
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="Customer">Customer</option>
                </select> <br />
                <input type="submit" value="Submit to SignUp" />
            </form>
            <a href="/users/signin">sign in</a>
        </div>
    )
}

module.exports = SignUp