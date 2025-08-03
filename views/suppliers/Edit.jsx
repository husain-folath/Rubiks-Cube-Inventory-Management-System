const React=require("react")

function Edit(props)
{
        const {_id,name,contact,email}=props.supplier

    return(
        <div>
            <h1>Edit supplier</h1>
            <form action={`/suppliers/${_id}?_method=PUT`} method="post">
            supplier name: <input type="text" name="name" defaultValue={name}/> <br />
            supplier Number: <input type="tel" name="contact" defaultValue={contact}/><br />
            supplier email: <input type="email" name="email" defaultValue={email}/><br />
            <input type="submit" value="Change supplier" />
            </form>
            <a href={`/suppliers/${_id}`}>Go back</a>
        </div>
    )
}

module.exports=Edit