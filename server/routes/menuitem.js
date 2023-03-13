const MenuitemController = require('../controllers/MenuitemController')
const UserController = require('../controllers/UserController')

function menuitemGetHandler (req, res, next) {
    if (req.query.id) {
        MenuitemController.getMenuitemById(req.query.id).then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else if (req.query.type) {
        MenuitemController.getMenuitemByType(req.query.type).then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    } else {
        console.log('router')
        MenuitemController.getMenuitems().then((menuitem) => {
            res.status(200).send(menuitem)
        }).catch((error) => {
            res.status(500).send('err')
        })
    }
}

function menuitemPostHandler (req, res, next) {
    // console.log(req.body.menuitem)
    MenuitemController.updateMenuitem(req.body.menuitem).then((menuitem) => {
        // console.log(menuitem)
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
    // res.status(200).send('done')
}

function menuitemCreateHandler (req, res, next) {
    MenuitemController.createMenuitem(req.body.menuitem).then((menuitem) => {
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

function menuitemDeleteHandler (req, res, next) {
    // console.log(req.query.id)
    MenuitemController.deleteMenuitem(req.query.id).then((menuitem) => {
        res.status(200).send(menuitem)
    }).catch((error) => {
        console.log(error)
        res.status(500).send('err')
    })
}

module.exports = function (server) {
    server.get('/api/menuitem', menuitemGetHandler)
    server.put('/api/menuitem', UserController.isLogin, menuitemCreateHandler)
    server.post('/api/menuitem', UserController.isLogin, menuitemPostHandler)
    server.delete('/api/menuitem', UserController.isLogin, menuitemDeleteHandler)
}
