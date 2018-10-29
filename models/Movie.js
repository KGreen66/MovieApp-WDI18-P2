const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Movie = new Schema({
    name: String,
    description: String,
    release: String,
    img: String,
    rating: Number,
    director: [{
        type: String,
        ref: 'Director'
    }],
    actors: [{
        type: String,
        ref: 'Actor'
    }]
})

module.exports = mongoose.model('Movie', Movie)