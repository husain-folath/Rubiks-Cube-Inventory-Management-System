const React=require("react")

function Edit(props)
{
    const token= props.token
    const {_id,name,description,price,stock}=props.product

    return(
        <div>
            <h1>Update product</h1>
            <form action={`/products/${_id}?_method=PUT&token=${token}`} method="POST">
            Product name: <input type="text" name="name" defaultValue={name}/> <br />
            Product description: <input type="text" name="description" defaultValue={description}/><br />
            Product price: <input type="number" name="price" defaultValue={price}/><br />
            Product stock: <input type="number" name="stock" defaultValue={stock}/><br />
            <input type="submit" value="Update Product" />
            </form>
            <a href={`/products/${_id}?token=${token}`}>Go back</a>
        </div>
    )
}

module.exports=Edit