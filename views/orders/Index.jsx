
const React=require("react")
const Layout=require("../layouts/Layout")

function Index (props)
{
    const token= props.token
    const orders=props.orders
    return(
        <Layout token={token}>
            <h1>Orders index page</h1>
            <a href={`/products?token=${token}`}>Go To Products</a> <br />
            <a href={`/suppliers?token=${token}`}>Go To suppliers</a> <br />
            <a href={`/orders/new?token=${token}`}>Add new Order</a> <br />
            <ul>
                {
                    orders.length>0?
                        orders.map(order=>{
                        return <li>order: <a href={`orders/${order._id}?token=${token}`}>Order ID:{`${order._id}`}</a> </li>
                        })
                   : (<li> No Orders Found</li>)
                }
            </ul>
        </Layout>
    )
}


module.exports=Index