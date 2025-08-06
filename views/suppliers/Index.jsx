const React=require("react")
const Layout=require("../layouts/Layout")

function Index (props)
{
    const token= props.token
    const suppliers=props.suppliers
    return(
        <Layout token={token}>
            <h1>Suppliers index page</h1>
            <a href={`/suppliers/new?token=${token}`}>Add supplier</a>
            <ul>
                {
                    suppliers.map(supplier=>{
                        return <li>supplier: <a href={`suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a> </li>
                    })
                }
            </ul>
        </Layout>
    )
}


module.exports=Index