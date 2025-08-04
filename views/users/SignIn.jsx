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
            <form action="/users/login" method="POST">
                email: <input type="email" name="email" /><br/>
                password: <input type="password" name="password" /><br/>
                <input type="submit" value="submit to SignIn" />
            </form>
        </div>
    )
}

module.exports = SignIn