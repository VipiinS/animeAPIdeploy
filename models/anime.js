const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    title:{
        type:String
    },
    ranking:{
        type:Number
    },
    genres:[String],
    episodes:{
        type:Number
    },
    image:{
        type:String
    },
    link:{
        type:String
    },
    status:{
        type:String
    },
    synopsis:{
        type:String
    },
    thumb:{
        type:String
    }
}) 

module.exports = mongoose.model('Anime',animeSchema);