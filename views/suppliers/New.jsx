const React=require("react")
const Layout=require("../layouts/Layout")

function NewView(props)
{
    const token= props.token
    return(
        <Layout token={token}>
            <h1>Add new supplier</h1>
            <form action={`/suppliers?token=${token}`} method="post">
            supplier name: <input type="text" name="name" placeholder="Enter name here"/> <br />
            supplier Number: <input type="tel" name="contact" placeholder="Enter phone number here"/><br />
            supplier email: <input type="email" name="email" placeholder="Enter name here"/><br />
            <input type="submit" value="Add supplier" />
            </form>
            <a href={`/suppliers?token=${token}`}>Go back</a>
        </Layout>
    )
}

module.exports=NewView