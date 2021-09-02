const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT  = process.env.PORT || 5000;

const app = express();


app.get('/' , ((req , res)=>{
res.send("<h1>Welcome to home page</h1>")
}))


//get all posts
app.get('/posts' ,async (req , res)=>{

    try {
         await  axios.get('https://jsonplaceholder.typicode.com/posts')
       //console.log(JSON.parse(response.name))
       //console.log(response)
        .then((response)=>res.json(response.data))
    } catch (error) {
        res.json(error)
    }
})

//get single post
app.get('/posts/:postId' ,async (req , res)=>{
    const {postId} = req.params
    try {
         await  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response)=>res.json(response.data))
    } catch (error) {
        res.json(error)
    }
})

//get all comments
app.get('/comments' ,async (req , res)=>{
    try {
         await  axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then((response)=>res.json(response.data))
    } catch (error) {
        res.json(error)
    }
})


//get single post comments
app.get('/posts/:postId/comments' ,async (req , res)=>{
    const {postId} = req.params
    try {
         await  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response)=>res.json(response.data))
    } catch (error) {
        res.json(error)
    }
})



app.listen(PORT , ((req , res)=>{
console.log(`Server listen on port ${PORT}`)
}))