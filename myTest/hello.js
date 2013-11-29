// 1. hello world
// console.log("HELLO WORLD");


// 2. baby step
// var sum = 0;
// for(var i=2; i<process.argv.length; i++){
// 	sum = sum + Number(process.argv[i]);
// }
// console.log(sum);


// 3. my first IO
// var fs = require('fs');
// var content = fs.readFileSync(process.argv[2]);
// var lines = content.toString().split('\n');
// console.log(lines.length-1);


// 4. my first async IO
// var fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', function (err, data) {
// 	if (err) throw err;
//  var lines = data.split('\n');
//  console.log(lines.length-1);
// });


// 5. filtered LS
// var fs = require('fs')
// var myPath = process.argv[2]
// var ext = '\\.' + process.argv[3] + '$'
// var ext2 = '.' + process.argv[3]

// 5a.
// fs.readdir(myPath, function (err, list){
// 	if (err) throw err;
// 	var patt = new RegExp(ext);
// 	list.forEach(function (file) {
// 	    if (patt.test(file))
// 	      console.log(file);
//   	});
// });

// 5b.
// fs.readdir(myPath, function (err, list){
// 	if (err) throw err
// 	var resultList = list.filter(function (file) {
// 		return file.substr(-(ext2.length)) == ext2
// 	})
// 	resultList.forEach(function (file) {
// 		console.log(file)
// 	})
// })

// WOW semicolons arent even necessary!


// 6. make it moduler
var fs = require('fs')
