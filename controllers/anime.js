const Anime = require('../models/anime')

const getAllProductsStatic = async(req,res)=>{
    console.log("inside static");
    const {id, search} = req.query
    const limit = Number(req.query.limit) || 20
    const page = Number(req.query.page) || 1
    const skip = (page-1) * limit;
    const queryObject = {};
    
    if(id){
        queryObject._id = id
    }
    if(search){
        queryObject.title = {$regex: search, $options:'i'}
    }
    console.log(queryObject);

    const result = await Anime.find(queryObject).skip(skip).limit(limit)

    res.status(200).send({result,nbHits:result.length})
}

const getAllProducts = async(req,res)=>{
    const {id, search} = req.query
    const limit = Number(req.query.limit) || 20
    const page = Number(req.query.page) || 1
    const skip = (page-1) * limit;

    const queryObject = {};
    
    if(id){
        queryObject._id = id
    }
    if(search){
        queryObject.title = {$regex: search, $options:'i'}
    }

    console.log(queryObject);

    const result = await Anime.find(queryObject).skip(skip).limit(limit)
    

    res.status(200).send({result,nbHits:result.length})
}







module.exports = {
    getAllProducts,
    getAllProductsStatic
}