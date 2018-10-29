const Actor = require('../models/Actor')
const Director = require('../models/Director')
const Movie = require('../models/Movie')

const actorController = {
    index: (req, res) => {
        Actor.find()
            .then(actors => {
                res.render('/actors', {actors: actors})
            })
    },
    show: (req, res) => {
        Actor.findById(req.params.actorId).populate('movies', 'name').then(actor => {
            res.render('/actors/show', {actor: actor})
        })
    },
    new: (req, res) => {
        res.render('/actors/new')
    },
    create: (req, res) => {
        Actor.create(req.body).then(newActor =>
            res.redirect(`/${newActor._id}`))
    },
    edit: (req, res) => {
        Actor.findById(req.params.actorId).then(actor => {
            res.render(`/actors/edit`, {actor: actor})
        })
    },
    update: (req, res) => {
        Actor.findByIdAndUpdate(req.params.actorId, req.body).then(updatedActor => {
            res.redirect(`/actors/${updatedActor}`)
        })
    },
    delete: (req, res) => {
        Actor.findByIdAndDelete(req.params.actorId).then(() => {
            res.redirect('/actors')
        })
    }
}

module.exports = actorController