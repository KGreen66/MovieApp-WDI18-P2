const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Director = new Schema({
    name: String,
    bio: String,
    img: String,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

module.exports = mongoose.model('Director', Director)