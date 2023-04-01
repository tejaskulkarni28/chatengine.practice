const express = require("express");
// we import express which runs the https
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", 
async (req, res) => {
    const { username } = req.body;
    // return res.json({username,secret:"sha-256"})

//Project ID: 6ea12df3-fee5-49e4-b937-f0044e6d39d2
try{
    const r = await  axios.put('https://api.chatengine.io/users/',
    {
        username:username,
        secret:username,
        first_name:username
    },{
        headers:{"private-key":"6834cd9d-a805-4a44-9f31-ae0ede3ba0f6"}
    })
    return res.status(r.status).json(r.data)
}catch(e){
    console.log(e.response.status)
}
});

app.listen(3001);
