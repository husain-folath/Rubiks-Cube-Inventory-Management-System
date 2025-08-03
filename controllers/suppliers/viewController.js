const viewController={}

viewController.index=function (req,res)
{
    res.render("suppliers/Index",res.locals.data)
}
viewController.newView=function (req,res)
{
    res.render("suppliers/New")
}
viewController.redirectHome=function (req,res)
{
    res.redirect("/suppliers")
}


module.exports=viewController