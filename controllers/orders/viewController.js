
const viewController={}

viewController.index= (req,res)=>
{
    res.render("orders/Index", res.locals.data)
}
viewController.newView= (req,res)=>
{
    res.render("orders/New", res.locals.data)
}
// Update
viewController.redirectShow=function (req,res)
{
    res.redirect(`/orders/${res.locals.data.order._id}`)
}
viewController.show=function (req,res)
{
    res.render("orders/Show",res.locals.data)
}
module.exports=viewController