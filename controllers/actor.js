const Actor = require('../models/Actor')
const Director = require('../models/Director')
const Movie = require('../models/Movie')

const actorController = {
    index: (req, res) => {
        res.send('this is main index')
    },
    show: (req, res) => {
        res.send('this is show actor page')
    },
    new: (req, res) => {
        res.send('create a new actor')
    },
    create: (req, res) => {
        res.send('magic')
    },
    edit: (req, res) => {
        res.send('edit actor here')
    },
    update: (req, res) => {
        res.send('update magic')
    },
    delete: (req, res) => {
        res.send('delete this')
    }
}

module.exports = actorController