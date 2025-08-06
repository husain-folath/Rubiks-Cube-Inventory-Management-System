const React = require("react")


function Layout (props)
{
    const token=props.token
    return(
  <html>
    <head>
        <title>Rubik's Cubes Shop</title>
        <link rel="stylesheet" href="/mainStyle.css" />
    </head>
    <body>
        <nav>
        <a href={`/products?token=${token}`}>Products</a>
        <a href={`/suppliers?token=${token}`}>Suppliers</a>
        <a href={`/orders?token=${token}`}>Orders</a>
        {props.token?<a href="/users/signin">Sign Out</a>:<a href="/users/signin">Sign In</a>}
        </nav>
      {props.children}
    </body>
  </html>
    )
}


module.exports= Layout