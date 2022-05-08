const {MongoClient} = require("mongodb");

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            console.log("Welcome");
            const client = await MongoClient.connect(process.env.MONGO_DRIVER);
            this.selectedDb = client.db("hall-booking");
            console.log(this.selectedDb);
        }catch(e){
            console.log(e);
        }
    }
}