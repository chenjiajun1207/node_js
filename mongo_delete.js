var MongoClient = require('mongodb').MongoClient;
var DB_URL = "mongodb://localhost:27017";
MongoClient.connect(DB_URL,
                    function(error, db) {
                        console.log("连接成功");
                        deleteData(db);
                    });
function deleteData(db) {
    var temp = db.db('test');
    var ttemp = temp.collection('foo');

    var data = {
        "bar": "123"
    };
    ttemp.remove(data,
                   function(error, result) {
                       if (error) {
                           console.log('Error:' + error);
                       } else {
                           console.log(result.result.n);
                       }
                       db.close();
                   });
}
