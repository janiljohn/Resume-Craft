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
    console.log(req.body)
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

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})