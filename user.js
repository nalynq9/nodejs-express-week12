const express = require('express')
const http = require('http')

router.get('/',(req,res,next)=>{
    res.send('Router Home')
})

router.get('/user',(req,res,next)=>{
    res.send('User Router Working')
})

router.get('/admin',(req,res,next)=>{
    res.send('Admin Router Working')
})

module.exports = router