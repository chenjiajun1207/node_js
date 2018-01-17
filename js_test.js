#!/usr/bin/nodejs  
var cwd = process.argv[1].substring(0, process.argv[1].lastIndexOf("/"));  
var fs = require('fs');  
  
function load(file, cb) {  
        fs.readFile(file, function(err, data) {  
                if (err)  
                        throw err;  
                cb(JSON.parse(data.toString()));  
        });  
}  
  
 
        if (process.argv.length < 2) { 
                console.log("usage\n\t" + process.argv[1] + " loadfile");  
                return;  
        }  
        load(process.argv[2], function(obj) {  
                console.log("%s\n", obj.person.name);  
                console.log("%s\n", obj.person.birth);  
		});
		