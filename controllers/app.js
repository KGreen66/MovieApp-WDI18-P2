const Actor = require('../models/Actor')
const Director = require('../models/Director')

const applicationController = {
    index: (req, res) => {
        res.send('this is main index')
    },
    show: (req, res) => {
        res.send('this is show movie page')
    },
    new: (req, res) => {
        res.send('create a new movie')
    },
    create: (req, res) => {
        res.send('magic')
    },
    edit: (req, res) => {
        res.send('edit movie here')
    },
    update: (req, res) => {
        res.send('update magic')
    },
    delete: (req, res) => {
        res.send('delete this')
    }
}

module.exports = applicationController