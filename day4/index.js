const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const PORT=2020
const huruf = require('lodash')


app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())//client ngirim data ke server

const users=[
    {
        id:1,
        username:'jamal',
        email:'jamal@gmail.com',
        password:'12345'
    },
    {
        id:2,
        username:'bobi',
        email:'bobi@gmail.com',
        password:'dsa'
    },
    {
        id:3,
        username:'fakhran',
        email:'fakhran@gmail.com',
        password:'asd'
    }
]

const arrprod=[
    {
        id:1,
        nama:'popok hokage',
        harga:10000,
        desc:'siapkah bayi anda jadi hokage?'

    },
    {
        id:2,
        nama:'popok ngesot',
        harga:20000,
        desc:'ngesootttt'

    },
    {
        id:3,
        nama:'popok yang tertukar',
        harga:30000,
        desc:'tertukarrrr'

    },
    {
        id:4,
        nama:'popok naruto',
        harga:10000,
        desc:'naruto'

    },
    {
        id:5,
        nama:'sabuk naruto',
        harga:10000,
        desc:'naruto'

    },
]


app.get('/', (req,res)=>{
    res.status(200).send(console.log(users[1].username))
})

app.get('/users',(req,res)=>{
    // console.log(req.query) bandingin yg di req
    const {username, password}=req.query
    if(username||password){
        var newuser=users.filter((val)=>val.username===username && val.password===password)
        if(newuser.length===0){
            return res.status(404).send(`user tidak ketemu`)
        }
        return res.status(200).send(newuser[0])
    }else{
        return res.status(200).send(users)
    }
    // for(i=0;i<users.length;i++){
    //     if(username==users[i].username && password==users[i].password){
    //         res.status(200).send(users[i])
    //     }else if(username!=users[i].username || password!=users[i].password){
    //         res.status(200).send('<h1>user ga ada</h1>')
    //     }else{
    //         res.status(200).send(users)
    //     }
    // }
})


app.post('/users', (req,res)=>{
    console.log(req.body)
    const {username,email}=req.body

    var newuser=users.filter((val)=>val.username===username && val.email===email)
    if(newuser.length){
        return res.status(500).send({message:'username/email udah ada'})
    }
    users.push({...req.body,id:users.length+1})
    res.status(200).send('berhasil')
})

app.put('/editusers/:id', (req,res)=>{
    // console.log(req.params.id)

    if(users[req.params.id-1]){
        users[req.params.id-1]={...users[req.params.id-1],password:req.body.password}
        return res.status(200).send(users[req.params.id-1])
    }else{
        return res.status(404).send({message:'user/email not found'})
    }
})


//delete starts
app.delete('/delete/:id', (req,res)=>{
    var {id} = req.params
    console.log(id)
    users.splice(id-1, 1)
    res.status(200).send('berhasil delete')
})
//delete ends

//search starts
app.get('/popok', (req,res)=>{
    console.log(req.query)
    var { nama, harga,hargamax,hargamin } = req.query
    if(nama||harga){
        var newarr=arrprod.filter((val)=> val.nama.includes(nama) || val.harga === parseInt(harga))
        return res.status(200).send(newarr)
    }else if(hargamax&&hargamin){
        var newarrmaxmin=arrprod.filter((val)=> val.harga <= parseInt(hargamax) && val.harga >=parseInt(hargamin))
        return res.status(200).send(newarrmaxmin)
    }else if(hargamax || hargamin){
        if(hargamax){
            var newarrmax=arrprod.filter((val)=> val.harga <= parseInt(hargamax))
            return res.status(200).send(newarrmax)
        }else if(hargamin){
            var newarrmin=arrprod.filter((val)=> val.harga >= parseInt(hargamin))
            return res.status(200).send(newarrmin)
        }
    }
    res.status(200).send(arrprod)
})
//search ends

app.listen(PORT, ()=>console.log(`API JALAN DI ${PORT}`))