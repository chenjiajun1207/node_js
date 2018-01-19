var mongodb = require('mongodb') 
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017';

var selectData = function(db, callback) {
    const myAwesomeDB = database.db('test');
	
    var tt=myAwesomeDB.collection('foo');
    //查询数据
    var whereStr = {
        "name": 'node'
    };
    collection.find(whereStr,
    function(error, cursor) {
        cursor.each(function(error, doc) {
            if (doc) {
                //console.log(doc);
                if (doc.addTime) {
                    console.log("addTime: " + doc.addTime);
                }
            }
        });
    });
}

MongoClient.connect(DB_CONN_STR,
function(err, database) {
    console.log("连接成功！");
    selectData(db,
    function(result) {
        console.log(result);
        db.close();
    });
});