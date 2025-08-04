const React = require("react")

function index (props)
{
    const products= props.products
    return(
        <div>
            <p><a href="/suppliers">Go To Suppliers</a> <a href="/orders">Go To Orders</a> <a href="/users/signin">Sign In</a></p>
            <h1>Avialable Products:</h1>
            <a href="/products/new">Add a new product</a> <br />
            <ul>
                {
                    products.map(product=>{
                        return(
                            <p>
                                name: <a href={`/products/${product._id}`}>{product.name} </a><br/>
                                description: {product.description}<br/>
                                price: {product.price}<br/>
                                stock: {product.stock}<br/>
                            </p>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports=index