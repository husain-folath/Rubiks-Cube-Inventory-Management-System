const React = require("react")

function index (props)
{
    const products= props.products
    return(
        <div>
            <h1>Avialable Products:</h1>
            <a href="/products/new">Add a new product</a>
            <ul>
                {
                    products.map(product=>{
                        return(
                            <p>
                                name: {product.name} <br/>
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