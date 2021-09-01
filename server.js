const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT  = process.env.PORT || 5000;

const app = express();

app.get('/' , ((req , res)=>{
res.send("<h1>Welcome to home page</h1>")
}))

app.listen(PORT , ((req , res)=>{
console.log(`Server listen on port ${PORT}`)
}))