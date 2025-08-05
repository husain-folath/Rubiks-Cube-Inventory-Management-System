const React=require("react")


function Index (props)
{
    const orders=props.orders
    return(
        <div>
            <h1>Orders index page</h1>
            <a href="/products">Go To Products</a> <br />
            <a href="/suppliers">Go To suppliers</a> <br />
            <a href="/orders/new">Add new Order</a> <br />
            <ul>
                {
                    orders.length>0?
                        orders.map(order=>{
                        return <li>order: <a href={`orders/${order._id}`}>Order ID:{`${order._id}`}</a> </li>
                        })
                   : (<li> No Orders Found</li>)
                }
            </ul>
        </div>
    )
}


module.exports=Index