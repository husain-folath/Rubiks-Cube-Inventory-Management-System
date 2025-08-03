const React=require("react")


function index (props)
{
    const suppliers=props.suppliers
    return(
        <div>
            <h1>Suppliers index page</h1>
            <a href="/products">Go To Products</a> <br />
            <a href="/suppliers/new">Add supplier</a>
            <ul>
                {
                    suppliers.map(supplier=>{
                        return <li>supplier: {supplier.name}</li>
                    })
                }
            </ul>
        </div>
    )
}


module.exports=index