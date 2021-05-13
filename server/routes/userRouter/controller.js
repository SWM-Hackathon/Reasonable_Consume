exports.test = async (req, res, next) => {
    try{
        res.send("test");
    }
    catch(error){
        next(error);
    }
}