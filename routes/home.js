const express = require('express');

const router = express.Router();


// get examples for Express
router.get('/',(req,res)=>{
    res.render('index',{title:"The first Express router", message:"Hi there, this is a Pug message"});
});
  

module.exports= router;