var IngredientController = {}
var ingredients = require('../models/ingredients')

function getIngredients () {
    // console.log('controller')
    return new Promise((resolve, reject) => {
        ingredients.find({}, { 
                '_id': 1,
                'id' :1,
                'name': 1,
                // 'type': 1,
                'created': 1,
                'updated': 1 
            }
        //     , function (err, data) {
        //     if (err) reject(err)
        //     console.log(data)
        //     resolve(data)
        //   }
          ).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                // console.log(data)
                resolve(data)
            }
        })
    })
}


function updateIngredient (ingredientToUpdate) {
    console.log(ingredientToUpdate)
    return new Promise((resolve, reject) => {
        ingredients.updateOne({_id: ingredientToUpdate._id}, {
            $set: {
                name: ingredientToUpdate.name,
                // type: ingredientToUpdate.type,
                updated: new Date()
            }
        }).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                // console.log(data)
                resolve(data)
            }
        })
    })
}

function createIngredient (ingredientToCreate) {
    // console.log(ingredientToCreate)
    return new Promise((resolve, reject) => {
        ingredients.create(ingredientToCreate).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                console.log(data)
                resolve(data)
            }
        })
    })
}

function deleteIngredient (id) {
    return new Promise((resolve, reject) => {
        ingredients.deleteOne({_id: id}).then((data, err) => { 
            if (err) {
                console.log(err)
                reject(err)
            } else {
                // console.log(data)
                resolve(data)
            }
        })
    })
}

IngredientController.getIngredients = getIngredients
IngredientController.updateIngredient = updateIngredient
IngredientController.createIngredient = createIngredient
IngredientController.deleteIngredient = deleteIngredient

module.exports = IngredientController
