const React = require("react")
const Layout = require("../layouts/Layout")

function NewView(props) {
    const token = props.token
    const suppliers = props.suppliers
    return (
        <Layout token={token}>
            <div id="productContainerNew">
                <h1>Add new product</h1>
                <div id="productFormContainerNew">
                    <form action={`/products?token=${token}`} method="post">
                    <div id="productFormSubContainerNew">
                    <div id="">
                        Product name: <br /><input type="text" name="name" placeholder="Enter name here" />
                        Product description:<br /> <input type="text" name="description" placeholder="Enter description here" />
                        Product Image URL:<br /> <input type="text" name="image" placeholder="Paste URL here" />
                    </div>
                    <div>
                        Product price:<br /> <input type="number" name="price" defaultValue="1" />
                        Product stock:<br /> <input type="number" name="stock" defaultValue="1" />
                        Supplier:<br />
                        <select name="supplier">
                            <option value="">Select a supplier</option>
                            {
                                suppliers.map(supplier => {
                                    return (
                                        <option value={`${supplier._id}`}>{`${supplier.name}`}</option>
                                    )
                                })
                            }
                        </select>
                        </div> <br />
                        </div>
                        <input type="submit" value="Add Product" id="productAddBtnNew"/>
                    </form>
                </div>
                <a href={`/products?token=${token}`}><button id="productReturnBtnNew">Return</button></a>
            </div>
        </Layout>
    )
}

module.exports = NewView