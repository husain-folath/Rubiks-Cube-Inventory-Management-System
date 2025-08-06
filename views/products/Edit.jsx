const React = require("react")
const Layout = require("../layouts/Layout")

function Edit(props) {
    const token = props.token
    const { _id, name, description, price, stock,image, supplier } = props.product
    return (
        <Layout token={token}>
            <div id="productContainerNew">
                <h1>Update product</h1>
                <div id="productFormContainerNew">
                    <form action={`/products/${_id}?_method=PUT&token=${token}`} method="post">
                        <div id="productFormSubContainerNew">
                            <div id="">
                                Product name: <br /><input type="text" name="name" defaultValue={name} />
                                Product description:<br /> <input type="text" name="description" defaultValue={description} />
                                Product Image URL:<br /> <input type="text" name="image" defaultValue={image} />
                            </div>
                            <div>
                                Product price:<br /> <input type="number" name="price" defaultValue={price} />
                                Product stock:<br /> <input type="number" name="stock" defaultValue={stock} />
                                
                            </div> <br />
                        </div>
                        <input type="submit" value="Add Product" id="productAddBtnNew" />
                    </form>
                </div>
                <a href={`/products/${_id}?token=${token}`}><button id="productReturnBtnNew">Return</button></a>
            </div>

            {/* <Layout token={token}>
                <h1>Update product</h1>
                <form action={`/products/${_id}?_method=PUT&token=${token}`} method="POST">
                    Product name: <input type="text" name="name" defaultValue={name} /> <br />
                    Product description: <input type="text" name="description" defaultValue={description} /><br />
                    Product price: <input type="number" name="price" defaultValue={price} /><br />
                    Product stock: <input type="number" name="stock" defaultValue={stock} /><br />
                    <input type="submit" value="Update Product" />
                </form>
                <a href={`/products/${_id}?token=${token}`}>Go back</a>
            </Layout> */}
        </Layout>
    )
}

module.exports = Edit