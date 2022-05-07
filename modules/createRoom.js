const mongo = require("../shared");

module.exports.setRooms = async (req,res,next) => {
    try{
        console.log(req.body)
        const data = await mongo.selectedDb.collection("rooms").insertOne(req.body);
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getRooms = async (req,res,next) => {
    console.log(mongo)
    try{
        const data = await mongo.selectedDb.collection("rooms").find().toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}