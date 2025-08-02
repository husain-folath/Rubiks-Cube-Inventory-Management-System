const React=require("react")

function NewView(props)
{
    return(
        <div>
            <h1>Add new product</h1>
            <form action="/products" method="post">
            Product name: <input type="text" name="name" placeholder="Enter name here"/> <br />
            Product description: <input type="text" name="description" placeholder="Enter description here"/><br />
            Product price: <input type="number" name="price" defaultValue="1"/><br />
            Product stock: <input type="number" name="stock" defaultValue="1"/><br />
            <input type="submit" value="Add Product" />
            </form>
            <a href="/products">Go back</a>
        </div>
    )
}

module.exports=NewView