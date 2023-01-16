const errorHandlerMiddleware = async(err,req,res,next)=>{
    console.log(err);
    return res.statuc(500).json({message:"something went wrong"})
}

module.exports =  errorHandlerMiddleware