const React=require("react")
const Layout=require("../layouts/Layout")

function NewView(props)
{
    const token= props.token
    const products=props.products
    return(
        <Layout token={token}>
            <h1>Add a new Order</h1>
            <form action={`/orders?token=${token}`} method="post">
       
            Product: 
            <select name="productId">
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
            {
//                 <form action="/submit" method="POST">
//   <label htmlFor="products">Select Products:</label><br />
//   <select name="products[]" multiple size="5">
//     <option value="id1">Rubik's Cube 2x2</option>
//     <option value="id2">Rubik's Cube 3x3</option>
//     <option value="id3">Rubik's Pyramid</option>
//     <option value="id4">Rubik's Mirror Cube</option>
//     <option value="id5">Rubik's Ghost Cube</option>
//   </select>
//   <br /><br />
//   <button type="submit">Submit</button>
// </form>
// 

            }
        {/* {products.map(p => (
        <div key={p._id}>
            <input type="checkbox" name="products[]" value={p._id} />&nbsp;&nbsp;
            {p.name}&nbsp;&nbsp;
            <input type="number" name={`qty_${p._id}`} min="1" defaultValue="1" />
            </div>
            ))}      */}
            
            <a href={`/orders?token=${token}`}>Go back</a>
        </Layout>
    )
}

module.exports=NewView