const Actor = require('../models/Actor')
const Director = require('../models/Director')
const Movie = require('../models/Movie')

const applicationController = {
    index: (req, res) => {
        Movie.find()
            .then(movies => {
                res.render('movies/index', {
                    movies: movies
                })
            })
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