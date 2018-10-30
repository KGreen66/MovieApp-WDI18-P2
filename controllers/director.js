const Actor = require('../models/Actor')
const Director = require('../models/Director')
const Movie = require('../models/Movie')

const directorController = {
    index: (req, res) => {
        Director.find()
            .then(directors => {
                res.render('directors/index', {directors: directors})
            })
    },
    show: (req, res) => {
        Director.findById(req.params.directorId).populate('movies', 'name').then(director => {
            res.render('directors/show', {director: director})
        })
    },
    new: (req, res) => {
        res.render('directors/new')
    },
    create: (req, res) => {
        Director.create(req.body, {movies: Movie}).then(newDirector =>
            res.redirect(`/${newDirector._id}`))
    },
    edit: (req, res) => {
        Director.findById(req.params.directorId).then(director => {
            res.render(`directors/edit`, {director: director})
        })
    },
    update: (req, res) => {
        Director.findByIdAndUpdate(req.params.directorId, req.body).then(updatedDirector => {
            res.redirect(`/directors/${updatedDirector}`)
        })
    },
    delete: (req, res) => {
        Director.findByIdAndRemove(req.params.directorId).then(() => {
            res.redirect('/directors')
        })
    }
}

module.exports = directorController