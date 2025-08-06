const React = require("react")
const Layout=require("../layouts/Layout")

function index (props)
{
    const products= props.products
    const token=props.token
    return(
        <Layout token={token}>
            <h1>Avialable Products:</h1>
            <a href={`/products/new?token=${token}`}>Add a new product</a> <br />
            <div className="productsContainer">
                {
                    products.map(product=>{
                        return(
                            <div class="product">
                                <img src={product.image} alt={product.description} />
                                name: <a href={`/products/${product._id}?token=${token}`}>{product.name} </a><br/>
                                description: {product.description}<br/>
                                price: {product.price}<br/>
                                stock: {product.stock}<br/>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

module.exports=index