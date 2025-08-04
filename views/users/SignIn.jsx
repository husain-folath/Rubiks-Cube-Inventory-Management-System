const React=require("react")

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// })


function SignIn (props) {
    return(
        <div>
            <h1>Sign in for the GOAT.</h1>
            <form action="/users/signin" method="POST">
                email: <input type="email" name="email" /><br/>
                password: <input type="password" name="password" /><br/>
                <input type="submit" value="submit to SignIn" />
            </form>
            <a href="/products"> Go to Products</a>
            <a href="/users/Signup">Sign up</a>
        </div>
    )
}

module.exports = SignIn