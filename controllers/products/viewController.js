const  viewController={
    index(req,res)
    {
        res.render("products/Index",res.locals.data)
    },
    newView(req,res)
    {
        res.render("products/New")
    },
    redirectHome(req,res)
    {
        res.redirect("/products")
    },
}


module.exports=viewController