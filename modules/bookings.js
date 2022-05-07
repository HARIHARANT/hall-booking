const mongo = require("../shared");

module.exports.setBookings = async (req,res,next) => {
    try{
        console.log(req.body)
        const data = await mongo.selectedDb.collection("bookings").insertOne(req.body);
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getBookings = async (req,res,next) => {
    //console.log(mongo)
    try{
        const data = await mongo.selectedDb.collection("bookings").find().toArray();
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}


module.exports.getBookingsWithRoomsData = async (req,res,next) => {
    //console.log(mongo)
    try{        
        const data = await mongo.selectedDb.collection("bookings").aggregate([
            {
            $lookup: {
                   from: "rooms",
                   localField: "room_id",
                   foreignField: "room_id",
                   pipeline:[
                       {
                           $project:{_id:0, room_id:0, seats:0, priceperhour:0}
                       }
                       ],
                   as: "room_booked_data"
                 }
        }
        ]).toArray();
        
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}

module.exports.getBookingsWithAllCustomers = async (req,res,next) => {
    //console.log(mongo)
    try{        
        const data = await mongo.selectedDb.collection("bookings").aggregate([
            {
            $lookup: {
                   from: "rooms",
                   localField: "room_id",
                   foreignField: "room_id",
                   pipeline:[
                       {
                           $project:{_id:0, room_id:0, seats:0, priceperhour:0, amenities:0}
                       }
                       ],
                   as: "room_booked_data"
                 }
        }
        ]).project({_id:0, room_id: 0}).toArray();
        
        console.log(data)
        res.send(data)
    }catch(e){
        console.log(e)
    }
}