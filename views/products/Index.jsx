const React = require("react")
const Layout=require("../layouts/Layout")

function index (props)
{
    const products= props.products
    const token=props.token
    return(
        <Layout token={token}>
            <a href={`/products/new?token=${token}`} id="productAddBtnLink"> <button id="productAddBtn">+</button></a> <br />
            <h1 id="productsTitle">Products</h1>
            <div className="productsContainer">
                {
                    products.map(product=>{
                        return(
                            <a href={`/products/${product._id}?token=${token}`} class="productLink">
                                <div class="product">
                                    <img src={product.image} alt={product.description} />
                                    
                                        <h4 class="productName">{product.name}</h4>
                                        <span class="description"><strong> Description:</strong> {product.description}</span><br/>
                                        <span class="price"><strong>Price:</strong> ${product.price}</span><br/>
                                        <span class="stock"><strong>Stock:</strong> {product.stock}</span><br/>
                                        <span class="productSupplier"><strong>Supplier:</strong> {product.supplier.name}</span>
                                    
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

module.exports=index