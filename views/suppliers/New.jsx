const React=require("react")

function NewView(props)
{
    return(
        <div>
            <h1>Add new supplier</h1>
            <form action="/suppliers" method="post">
            supplier name: <input type="text" name="name" placeholder="Enter name here"/> <br />
            supplier Number: <input type="tel" name="contact" placeholder="Enter phone number here"/><br />
            supplier email: <input type="email" name="email" placeholder="Enter name here"/><br />
            <input type="submit" value="Add supplier" />
            </form>
            <a href="/suppliers">Go back</a>
        </div>
    )
}

module.exports=NewView