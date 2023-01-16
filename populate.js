require('dotenv').config()

// const connectDB = require('./db/connect')
// const Anime = require('./models/anime')

// const jsonAnime = require('./file.json')

// console.log("hi")
// const start = async()=>{
//     try {
//         await connectDB(process.env.MONGO_URI);
//         console.log("connection sucess")
//         await Anime.deleteMany();
//         await Anime.create(jsonAnime);
//         console.log("upload sucess")
//         process.exit(0)
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }

// start();

const hello = require('./newdata.json')

const hi = hello.map((item)=>{
    delete item._id
    delete item.alternativeTitles
    delete item.hasEpisode
    delete item.hasRanking
    delete item.type
    
    return {...item}
})
console.log(hi);
require('fs').writeFile('file.json',JSON.stringify(hi),(err)=>{
    if(err) throw err
});