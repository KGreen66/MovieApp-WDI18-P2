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
        Movie.findById(req.params.movieId).populate('actors').populate('director').then(movie => {
            res.render('movies/show', {movie: movie})
          })
    },
    new: (req, res) => {
        res.render('movies/new')
    },
    create: (req, res) => {
        Movie.create(req.body).then(newMovie =>
            res.redirect(`/${newMovie._id}`))
    },
    edit: (req, res) => {
        Movie.findById(req.params.movieId).then(movie => {
            res.render('movies/edit', {movie: movie})
        })
    },
    update: (req, res) => {
        Movie.findByIdAndUpdate(req.params.movieId, req.body).then(updatedMovie => {
            res.redirect(`/${updatedMovie._id}`)
        })
    },
    delete: (req, res) => {
        Movie.findByIdAndRemove(req.params.movieId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = applicationController