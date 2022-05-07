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


        function fetchDataProducts(databasename,collectionname){
            url='mongodb://127.0.0.1:27017'
            return new Promise((resolve,reject)=>{
                MongoClient.connect(url,async(err,client)=>{
                    if(!err){
                        console.log("successful")
                        const db=client.db(databasename)
                        let database_data=await db.collection(collectionname).find().toArray()
                        dataclean=database_data
                        resolve(dataclean)
                    }
                })
            })
        }

        function InsertdataDatabase(databasename,collectionname,data_insert){
            url='mongodb://127.0.0.1:27017'
            return new Promise((resolve,reject)=>{
                MongoClient.connect(url,(err,client)=>{
                    if(!err){
                        console.log("success")
                        const db=client.db(databasename)
                        db.collection(collectionname).insertOne(data_insert,(err,res)=>{
                            if(err){
                                console.log("error")
                            }else{
                                console.log("document inserted")
                                resolve("success")
                            }
                        })
                    }
                })
            })
        }


        
        
    



module.exports.Database_Connectivity=Database_Connectivity;
module.exports.fetchData=fetchData;
module.exports.fetchDataProducts=fetchDataProducts;
module.exports.InsertdataDatabase=InsertdataDatabase;



