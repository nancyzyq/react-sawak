const IngredientController = require('../controllers/IngredientController')
// const UserController = require('../controllers/UserController')

function ingredientGetHandler (req, res, next) {
    if (req.query.id) {
        IngredientController.getIngredientById(req.query.id).then((food) => {
            res.status(200).send(food)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        IngredientController.getIngredients().then((data) => {
            res.status(200).send(data)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

function ingredientCreateHandler (req, res, next) {
    // console.log('aa', req.body.ingredient)
    IngredientController.createIngredient(req.body.ingredient).then((data) => {
        // console.log(data)
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

function ingredientPostHandler (req, res, next) {
    IngredientController.updateIngredient(req.body.ingredient).then((data) => {
        // console.log(data)
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
    // res.status(200).send('done')
}

function ingredientDeleteHandler (req, res, next) {
    // console.log(req.query.id)
    IngredientController.deleteIngredient(req.query.id).then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

module.exports = function (server) {
    server.get('/api/ingredient', ingredientGetHandler)
    // server.put('/api/ingredient', UserController.isLogin, ingredientCreateHandler)
    // server.post('/api/ingredient', UserController.isLogin, ingredientPostHandler)
    // server.delete('/api/ingredient', UserController.isLogin, ingredientDeleteHandler)
}
