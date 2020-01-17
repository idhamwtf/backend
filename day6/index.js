const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const {mysqldb}=require('./connection')
const PORT=2020



app.use(BodyParser.urlencoded({extended: false }))
app.use(BodyParser.json())


app.get('/prod', (req,res)=>{
    var sql = ` select * from product;`
    mysqldb.query(sql,(err,result)=>{
        if(err) res.status(500).send(err)
        console.log(result)
        res.status(200).send(result) 
    })
})

app.listen(PORT, ()=>console.log(PORT))