var fs = require("fs");

var data = fs.readFileSync("input.txt");
console.log(data.toString());

fs.readFile("input.txt", function(err, data){
    console.log(data.toString());
    console.error(err);
});
