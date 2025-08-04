const React =require("react")

function Show (props)
{
    const order =props.order

    return(
        <div>
            <h1>order ID: {`${order._id}`}</h1>
            <p>
                cost: {order.cost} <br />
                status: {order.status}<br />
                 items: {order.items.length>0?order.items.map(item=>{return<p><a href={`/products/${item.product._id}`}>{item.product.name}</a>, Quantity:{item.quantity}</p>}): (<li>No items found</li>)}<br />
            </p>
            <form action={`/orders/${order._id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete order" />
            </form>
            <a href={`/orders/${order._id}/edit`}><button>Edit order</button></a> <br />
            <a href="/orders">Go Back</a>
        </div>
    )
}



module.exports=Show