var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017";
MongoClient.connect(DB_URL,
                    function(error, datebase) {
                        console.log("连接成功!");
                        updateData(datebase);
                    }
                   );
function updateData(datebase,callback) {
    const myAwesomeDB = datebase.db('test');
    var tt=myAwesomeDB.collection('foo');

    var whereData = {
        "bar": "baz"
    };
    var updateDat = {
        $set: {
            "age": 26
        }
    };
        //如果不用$set，替换整条数据
    tt.update(whereData, updateDat,
                   function(error, result) {
                       if (error) {
                           console.log('Error:' + error);
                       } else {
                           //console.log(result);
                       }
                      datebase.close();
                   });
}
