const { disabled } = require('express/lib/application')
const db=require('./database')
const {MongoClient}=require('mongodb')
const { resolve, reject } = require('promise')
const Promise=require('promise')
const async = require('hbs/lib/async')
function Database_Connectivity(){
    url='mongodb://127.0.0.1:27017'
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url,async (err,client)=>{
            if(!err){
                resolve("database connection successful")
            }else{
                reject("database connection unsuccesful")
            }
        })
    })}


    function fetchData(databasename,collectionname,data_identifier){
        url='mongodb://127.0.0.1:27017'

        return new Promise((resolve,reject)=>{
            MongoClient.connect(url,async(err,client)=>{
                if(!err){
                    console.log("connection successful")
                    const db=client.db(databasename)
                    let database_data=await db.collection(collectionname).find(data_identifier).toArray()
                    dataclean=database_data[0]
                    resolve(dataclean)
                }
            })
        })
        }
        
        
    



module.exports.Database_Connectivity=Database_Connectivity;
module.exports.fetchData=fetchData;





