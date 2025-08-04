const viewController={}

viewController.signIn= (req,res)=>
{
    res.render("users/SignIn")
}
viewController.signUp= (req,res)=>
{
    res.render("users/SignUp")
}
viewController.redirectSignIn= (req,res)=>
{
    res.redirect("/users/signin")
}

module.exports= viewController