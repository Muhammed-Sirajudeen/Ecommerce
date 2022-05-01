function FetchFromdb(){

const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url='mongodb://localhost:27017';
MongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(!err){
        console.log("connection successful")
    }
});
}
module.exports.FetchFromdb=FetchFromdb;