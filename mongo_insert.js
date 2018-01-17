var MongoClient = require("mongodb").MongoClient;
var DB_URL = "mongodb://localhost:27017";

MongoClient.connect(DB_URL,poolSize=5,
                    function(err, database) {
                        if(err) { return console.dir(err); }
                        console.log('连接成功!');
                        const myAwesomeDB = database.db('test');
                        var tt=myAwesomeDB.collection('foo');
                        tt.insertOne({
                            bar: "123"
                        },
						function(err,result){
							if(err)
								{ return console.dir(err); }//console.log()，会在浏览器控制台打印出信息。
															//console.dir()可以显示一个对象所有的属性和方法
							console.log(result);
							return 1;
						}
						
						)
                    });
