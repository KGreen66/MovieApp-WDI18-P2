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
        Movie.findById(req.params.movieId).then(movie => {
            res.render('movies/show', {movie: movie})
          })
    },
    new: (req, res) => {
        Movie.create(req.body).then(newMovie =>
            res.redirect(`/${newMovie._id}`))
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