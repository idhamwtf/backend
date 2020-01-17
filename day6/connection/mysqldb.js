const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'idham',
    database:'hokihokibento',
    port:'3306'
})

module.exports=db