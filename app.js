const express = require('express')
const morgan = require('morgan')
const app = express()
const jsxEngine=require("jsx-view-engine")
const methodOverride=require("method-override")
const productRouter=require("./controllers/products/routeController")

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json()) // this is new this for the api
app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(morgan('dev'))


app.get("/",(req,res)=>
{
    res.redirect("/products")
})

app.use("/products",productRouter)


module.exports = app