const React=require("react")


function Index (props)
{
    const token= props.token
    const suppliers=props.suppliers
    return(
        <div>
            <h1>Suppliers index page</h1>
            <a href={`/products?token=${token}`}>Go To Products</a> <br />
            <a href={`/suppliers/new?token=${token}`}>Add supplier</a>
            <ul>
                {
                    suppliers.map(supplier=>{
                        return <li>supplier: <a href={`suppliers/${supplier._id}?token=${token}`}>{supplier.name}</a> </li>
                    })
                }
            </ul>
        </div>
    )
}


module.exports=Index