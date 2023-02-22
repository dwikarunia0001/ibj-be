const userController = require("./controllers/userControllers")
const CategoryController = require("./controllers/categoryController")

const _routes=[
    //http://localhost:8000/api/users/
    ['users', userController],
    // http://localhost:8000/api/login
    // ['login', AuthController],
    //http://localhost:8000/api/category/
    ['category', CategoryController],
]
const routes= (app)=>{
    _routes.forEach(router=>{
        const [url, controller] = router
        app.use(`/api/${url}`, controller)
    })
}
module.exports = routes