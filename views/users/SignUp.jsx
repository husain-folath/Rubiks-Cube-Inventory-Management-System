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
            <form action="/users" method="POST">
                Name: <input type="text" name="name" /><br/>
                email: <input type="email" name="email" /><br/>
                password: <input type="password" name="password" /><br/>
                <input type="submit" value="Submit to SignUp" />
            </form>
        </div>
    )
}

module.exports = SignUp