const { show } = require("./dataController")

const  viewController={
    index(req,res)
    {
        res.render("products/Index",res.locals.data)
    },
    newView(req,res)
    {
        res.render("products/New")
    },
    edit(req,res)
    {
        res.render("products/Edit",res.locals.data)
    },
    show(req,res)
    {
        res.render("products/Show",res.locals.data)
    },
    redirectHome(req,res)
    {
        res.redirect("/products")
    },
    redirectShow(req,res)
    {
        res.redirect(`/products/${res.locals.data.product._id}`)
    },
}


module.exports=viewController