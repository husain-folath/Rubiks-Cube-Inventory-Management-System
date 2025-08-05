const React =require("react")
const Layout=require("../layouts/Layout")

function Show (props)
{
    const token= props.token
    const order =props.order
    const products= props.products
    return(
        <Layout token={token}>
            <h1>Order ID: {`${order._id}`}</h1>
            <p>
                made By:{order.user.name} <br />
                cost: {order.cost} <br />
                status: {order.status}<br />
                items: {order.items.length>0?order.items.map(item=>{return<p><a href={`/products/${item.product._id}?token=${token}`}>{item.product.name}</a>, Quantity:{item.quantity}</p>}): (<li>No items found</li>)}<br />
            </p>
            <form action={`/orders/${order._id}/edit?_method=PUT&token=${token}`} method="post">
       
            Product: 
            <select name="productId" required>
                <option value="">Select a product</option>
                {
                    //use this and add quantity to redirect to a show page where you can add more products
                    products.map(product=>{
                        return(
                            <option value={`${product._id}`}>{`${product.name}`}</option>
                        )
                    })
                    
                }

            </select>
            Quantity: <input type="number" name="quantity" min={1} defaultValue={1} />
            <br />
            <input type="submit" value="Add Product" />
            </form>
            <form action={`/orders/${order._id}?_method=DELETE&token=${token}`} method="POST">
                <input type="submit" value="Delete order" />
            </form>

            <a href={`/orders/${order._id}/edit?token=${token}`}><button>Edit order</button></a> <br />
            <a href={`/orders?token=${token}`}>Go Back</a>
        </Layout>
    )
}



module.exports=Show