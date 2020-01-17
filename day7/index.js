const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')

const {mysqldb}=require('./connection')


const PORT=2020


app.use(cors())
app.use(BodyParser.urlencoded({extended: false }))
app.use(BodyParser.json())


// app.get('/prod', (req,res)=>{
//     var sql = ` select * from product;`
//     mysqldb.query(sql,(err,result)=>{
//         if(err) res.status(500).send(err)
//         console.log(result)
//         res.status(200).send(result) 
//     })
// })

app.get('/',(req,res)=>{
    return res.status(200).send('api')
})

app.get('/users',(req,res)=>{
    mysqldb.query(`select u.*,r.nama as rolename from users u left join roles r on u.roleid=r.id`,(err,result)=>{
        if(err) res.status(500).send(err)
        res.status(200).send(result)
    })
})

app.post('/users', (req,res)=>{
    // var data={
    //     username:`yant1o`,
    //     password:`1233`,
    //     email:`yant1o@mail.com`,
    //     phone:`12312312123`,
    //     }

    var sqlcheck=`select*from users where username='${req.body.username}' or email='${req.body.email}'`
    mysqldb.query(sqlcheck,(err,result)=>{
        if (err) res.status(500).send(err)
        if(result.length){
            return res.status(500).send({message:'user/email udah ada'})
        }else{
            var sql=`insert into users set ?`
            mysqldb.query(sql, {...req.body,lastlogin:new Date()}, (err1, result1)=>{
                if (err1) res.status(500).send(err1)
                getsql=`select*from users`
                mysqldb.query(getsql,(err2,result2)=>{
                    if (err2) res.status(500).send(err2)
                    res.status(200).send(result2)
                })
            })
        }
    })

})


app.delete('/users/:id', (req,res)=>{
    let sql=`select * from users where id=${req.params.id}`
    mysqldb.query(sql,(err,result)=>{
        if (err) res.status(500).send(err)
        if(result.length){
            sql=`delete from users where id=${req.params.id}`
            mysqldb.query(sql,(err1,result1)=>{
                if (err1) res.status(500).send(err1)
                getsql=`select*from users`
                mysqldb.query(getsql,(err2,result2)=>{
                    if (err2) res.status(500).send(err2)
                    res.status(200).send(result2)
                })
            })
        }else{
            return res.status(500).send({message:'ga ada idnya'})
        }
    })
})



app.listen(PORT, ()=>console.log(`aktif di port ${PORT}`))