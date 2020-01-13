var timers=require('timers')

var assert=require('assert')

var URL = require('url')

var OS = require('os')

// timers.setTimeout(()=>console.log('ini timeout'),2000)

// timers.setInterval(()=>console.log('ini interval'),1000)


// var minum={
//     kopi:['luwak','hitam','susu']
// }
// try{
//     assert.equal(minum.kopi.length,4)
// }catch(error){
//     console.log('masuk catch')
//     throw error
// }

// var link = 'http://lin.id/data.htm?tgl=2&bln=july'
// var x = URL.parse(link, true)

// console.log(x)



// var ramtotal=require('os')

// console.log(ramtotal)




var s = {
   bobi:()=>{
       return [0,1,{
           fakhran:[0,1,{
               dzaky:()=>{
                   return{
                       ragiel:['',()=>{
                           return {
                               kartika:(a)=>{
                                   return[0,1,2,'berhasil'+ a]
                               }
                           }
                       }]
                   }
               }
           }]
       }]
   }
}




console.log(s.bobi()[2].fakhran[2].dzaky().ragiel[1]().kartika(' :p')[3])

// console.log(s)


// console.log(s.bobi()[2])