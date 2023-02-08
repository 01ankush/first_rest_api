const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/user/:id',(req,res)=>{
    res.status(200).send({
        status: "user with id " + req.params.id
    })
})

app.post('/user/',(req,res)=>{
    res.status(200).send({
        status: "user created ",
        data :req.body
    })
})

app.put('/user/:id',(req,res)=>{
    res.status(200).send({
        status: "user updated with id " + req.params.id
    })
})

app.delete('/user/:id',(req,res)=>{
    res.status(200).send({
        status: "user deleted with id " + req.params.id
    })
})

app.listen(PORT,()=>{
    console.log("server is running");
})