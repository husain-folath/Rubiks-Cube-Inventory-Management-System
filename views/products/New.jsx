const React=require("react")
const Layout=require("../layouts/Layout")

function NewView(props)
{
    const token = props.token
    const suppliers=props.suppliers
    return(
        <Layout token={token}>
            <h1>Add new product</h1>
            <form action={`/products?token=${token}`} method="post">
            Product name: <input type="text" name="name" placeholder="Enter name here"/> <br />
            Product description: <input type="text" name="description" placeholder="Enter description here"/><br />
            Product price: <input type="number" name="price" defaultValue="1"/><br />
            Product stock: <input type="number" name="stock" defaultValue="1"/><br />
            Supplier: 
            <select name="supplier">
                <option value="">Select a supplier</option>
                {
                    suppliers.map(supplier=>{
                        return(
                            <option value={`${supplier._id}`}>{`${supplier.name}`}</option>
                        )
                    })
                }
            </select> <br />
            <input type="submit" value="Add Product" />
            </form>
            <a href={`/products?token=${token}`}>Go back</a>
        </Layout>
    )
}

module.exports=NewView