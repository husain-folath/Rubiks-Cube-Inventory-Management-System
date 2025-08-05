const React =require("react")
const Layout=require("../layouts/Layout")

function Show (props)
{
    const token= props.token
    const {_id,name,contact,email,products}=props.supplier
    return(
        <Layout token={token}>
            <h1>supplier: {name}</h1>
            <p>
                email: {email} <br />
                contact: {contact}<br />
                products: {products.map(product=>{return<p><a href={`/products/${product._id}?token=${token}`}>{product.name}</a></p>})}<br />
            </p>
            <form action={`/suppliers/${_id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete supplier" />
            </form>
            <a href={`/suppliers/${_id}/edit?token=${token}`}><button>Edit supplier</button></a> <br />
            <a href={`/suppliers?token=${token}`}>Go Back</a>
        </Layout>
    )
}



module.exports=Show