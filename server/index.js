const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.models')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/resume-craft')
// sudo mongod --dbpath=/Users/joel/data/db

app.post('/api/register', async (req, res) => {

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status: 'ok'})
    } catch (err) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user) {
        const token = {
            name: user.name,
            email: user.email
        }
        return res.json({status: 'ok', user: token})
    } else{
        return res.json({status: 'error', user: false})
    }
})

app.get('/api/quote', async (req, res) => {
    
    const token = JSON.parse(req.headers['x-access-token'])

    try{
        const email = token.email
        const user = await User.findOne({email: email})
        return res.json({status: 'ok', quote: user.quote})
    } catch (error) {
        console.log(error);
        res.json({status: 'error', error: 'invalid user'})
    }

})

app.post('/api/quote', async (req, res) => {
    
    const token = JSON.parse(req.headers['x-access-token'])

    try{
        const email = token.email
        await User.updateOne({email: email}, { $set: {quote: req.body.quote}})
        return res.json({status: 'ok'})
    } catch (error) {
        console.log(error);
        res.json({status: 'error', error: 'invalid user'})
    }

})

app.get('/api/university', async (req, res) => {
    
    const token = JSON.parse(req.headers['x-access-token'])

    try{
        const email = token.email
        const user = await User.findOne({email: email})
        return res.json({status: 'ok', university: user.university})
    } catch (error) {
        console.log(error);
        res.json({status: 'error', error: 'invalid user'})
    }

})

app.post('/api/university', async (req, res) => {

    const token = JSON.parse(req.headers['x-access-token'])

    try{
        const email = token.email
        console.log(email)
        console.log(typeof(JSON.stringify(req.body.university)))
        await User.updateOne(
            {email: email}, 
            {$set: {university: JSON.stringify(req.body.university)}}
        )
        return res.json({status: 'ok'})
    } catch (error){
        console.log(error);
        res.json({status: 'error', error: 'invalid user'})
    }

})


app.listen(1337, () => {
    console.log('Server started on 1337')
})