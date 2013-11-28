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
// var fs = require('fs');
// var myPath = process.argv[2];
// var ext = '.' + process.argv[3];

// // 5a.
// fs.readdir(myPath, function (err, list){
// 	if (err) throw err;
// 	var patt = new RegExp(ext);
// 	for(var i=0; i<list.length; i++){
// 		if(list[i].match(patt)){
// 			console.log(list[i]);
// 		}
// 	}
// });

// 5b.
// fs.readdir(myPath, function (err, list){
// 	if (err) throw err;
// 	var resultList = list.filter(function(f){
// 		return f.substr(-(ext.length)) == ext;
// 	});
// 	for(var i=0; i<resultList.length; i++){
// 		console.log(resultList[i]);
// 	}
// });

// 6. make it moduler
var fs = require('fs');
