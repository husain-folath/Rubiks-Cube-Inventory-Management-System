const React =require("react")

function Show (props)
{
    const {_id,name,description,price,stock, supplier}=props.product
    return(
        <div>
            <h1>Product: {name}</h1>
            <p>
                description: {description} <br />
                price: {price}<br />
                stock: {stock}<br />
                supplier: <a href={`/suppliers/${supplier._id}`}>{supplier.name}</a>
            </p>
            <form action={`/products/${_id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete Product" />
            </form>
            <a href={`/products/${_id}/edit`}><button>Edit Product</button></a> <br />
            <a href="/products">Go Back</a>
        </div>
    )
}



module.exports=Show