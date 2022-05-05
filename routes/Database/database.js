var database_data
function FetchFromdb(hey,name){

const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
const url='mongodb://127.0.0.1:27017';
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

 
    const db = client.db("Ecommerce");

    db.collection('Authentication').find(name).toArray().then((docs) => {

        hey(docs)
        
        });
    });
    
}


module.exports.FetchFromdb=FetchFromdb;





