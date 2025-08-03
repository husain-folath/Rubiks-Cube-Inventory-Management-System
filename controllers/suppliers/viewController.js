const viewController={}

// Index
viewController.index=function (req,res)
{
    res.render("suppliers/Index",res.locals.data)
}
// New
viewController.newView=function (req,res)
{
    res.render("suppliers/New")
}

// Create/destroy
viewController.redirectHome=function (req,res)
{
    res.redirect("/suppliers")
}
// Update
viewController.redirectShow=function (req,res)
{
    res.redirect(`/suppliers/${res.locals.data.supplier._id}`)
}
// Edit
viewController.edit=function (req,res)
{
    res.render("suppliers/Edit", res.locals.data)
}

// Show
viewController.show=function (req,res)
{
    res.render("suppliers/Show",res.locals.data)
}

module.exports=viewController