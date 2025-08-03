const React =require("react")

function Show (props)
{
    const {_id,name,contact,email,products}=props.supplier
    console.log(products)
    return(
        <div>
            <h1>supplier: {name}</h1>
            <p>
                email: {email} <br />
                contact: {contact}<br />
                products: {products.map(product=>{return<p>{product.name}</p>})}<br />
            </p>
            <form action={`/suppliers/${_id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete supplier" />
            </form>
            <a href={`/suppliers/${_id}/edit`}><button>Edit supplier</button></a> <br />
            <a href="/suppliers">Go Back</a>
        </div>
    )
}



module.exports=Show