const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Movie = new Schema({
    name: String,
    description: String,
    release: String,
    img: String,
    rating: Number,
    director: [{
        type: Schema.Types.ObjectId,
        ref: 'Director'
    }],
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'Actor'
    }]
})

module.exports = mongoose.model('Movie', Movie)