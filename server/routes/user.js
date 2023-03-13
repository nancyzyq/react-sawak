const UserController = require('../controllers/UserController')

function userGetHandler (req, res, next) {
    if (req.query.username && req.query.passwd) {
        UserController.signIn(req.query.username, req.query.passwd).then((user) => {
            res.status(200).send(user)
        }).catch((error) => {
            res.status(500).send(error)
        })
    }
}

module.exports = function (server) {
    server.get('/api/user', userGetHandler)
}
