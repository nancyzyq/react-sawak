const IngredientController = require('../controllers/IngredientController')

function ingredientGetHandler (req, res, next) {
    if (req.query.id) {
        IngredientController.getIngredientById(req.query.id).then((food) => {
            res.status(200).send(food)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        // console.log('ingredient')
        IngredientController.getIngredients().then((data) => {
            // console.log(data)
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

module.exports = function (server) {
    server.get('/api/ingredient', ingredientGetHandler)
    // server.put('/api/ingredient', UserController.isLogin, ingredientCreateHandler)
    // server.post('/api/ingredient', UserController.isLogin, ingredientPostHandler)
    // server.delete('/api/ingredient', UserController.isLogin, ingredientDeleteHandler)
}
