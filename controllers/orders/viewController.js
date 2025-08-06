
const viewController = {}

viewController.index = (req, res) => {
    res.render("orders/Index", res.locals.data)
}
viewController.newView = (req, res) => {
    res.render("orders/New", res.locals.data)
}
viewController.show = function (req, res) {
    res.render("orders/Show", res.locals.data)
}
viewController.edit = function (req, res) {
    res.render("orders/Edit", res.locals.data)
}
// Update
viewController.redirectShow = function (req, res) {
    if (res.locals.data.token) {
        res.redirect(`/orders/${res.locals.data.order._id}?token=${res.locals.data.token}`)
    }
    else {
        res.redirect(`/orders/${res.locals.data.order._id}`)
    }
}
viewController.redirectHome = function (req, res) {
    if (res.locals.data.token) {
        res.redirect(`/orders?token=${res.locals.data.token}`)
    }
    else {
        res.redirect(`/orders`)
    }
}
module.exports = viewController