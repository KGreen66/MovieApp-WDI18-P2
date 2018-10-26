const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Actor = new Schema({
    name: String,
    bio: String,
    img: String,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

module.exports = mongoose.model('Actor', Actor)