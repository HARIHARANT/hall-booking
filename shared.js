const {MongoClient} = require("mongodb");

module.exports = {
    selectedDb:{},
    async connect(){
        try{
            console.log("Welcome");
            const client = await MongoClient.connect("mongodb://localhost:27017");
            this.selectedDb = client.db("hall-booking");
            console.log(this.selectedDb);
        }catch(e){
            console.log(e);
        }
    }
}