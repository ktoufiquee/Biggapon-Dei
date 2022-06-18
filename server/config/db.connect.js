const config = require("./config")
const mysql = require('mysql');

const connection =  mysql.createConnection(config);

function dbConnect(){
    connection.connect((err)=>{
        if(err) {
            console.log(err);
        } else {
            console.log("Connection Success!");
        }
    });
    
}


module.exports = dbConnect;