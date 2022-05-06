const Promise=require('promise')
function add(a,b){
    
    return new Promise((resolve,reject)=>{
        let c=a+b;
        resolve(c)
    })
}

add(10,40).then((data)=>{
    return data
}).then((data)=>{
    let data1=data+10
    console.log(data1)
    return data1
}).then((data)=>{
    console.log(data*data4)
    return 0;
    
}).finally(()=>{
    console.log("finally")
})



const database_connection=require('./database')
database_connection.fetchData('Ecommerce','Authentication',{"name":"siraju"}).then((data)=>{
    console.log(data)
})