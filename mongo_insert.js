var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017";

MongoClient.connect(DB_URL,
                    function(err, database) {
                        if(err) { return console.dir(err); }
                        console.log('连接成功!');
                        const myAwesomeDB = database.db('test');
                        var tt=myAwesomeDB.collection('foo');
                        tt.insertOne({
                            bar: "123"
                        })
                            .then(function(result){
                                console.log(result);
                            });
                        return 1;
                    });
