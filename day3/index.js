// const chalk = require('chalk');
// console.log(chalk.red('Ini Merah'));
//  console.log(chalk.yellow('Ini Kuning')); 
//  console.log(chalk.green('Ini Hijau')); 
//  console.log(chalk.blue('Ini Biru'));

//  var slug = require('slug');

//  var satu = slug('NodeJS ♥ is ☢'); var dua = slug('I <3 NodeJS');
// console.log(satu) 
// console.log(dua)

// const moment = require('moment');
// var now1 = moment(); 
// var now2 = moment().format(); 
// var now3 = moment().format("ddd, hA"); 
// var now4 = moment().format ("dddd, MMMM Do YYYY, h:mm:ss a");
// console.log(now1); 
// console.log(now2); 
// console.log(now3); 
// console.log(now4)



// const _ = require('lodash')

// console.log(_.isString(135)); 
// console.log(_.isString('Startup'));
// console.log(_.capitalize('GOOgLE')); 
// console.log(_.upperFirst('facebook')); 
// console.log(_.upperCase('alibaba')); 
// console.log(_.lowerFirst('TWITTER')); 
// console.log(_.lowerCase('YAHOO'));


var http=require('http')

var fs=require('fs')

var PORT=2020

var html=fs.readFileSync('satu.html','utf8')
console.log(html)

var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(html)
})
server.listen(PORT)
console.log('server aktif di port'+ PORT)