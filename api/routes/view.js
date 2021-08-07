const router = require('express').Router()
const mongoose = require("mongoose")
const Account = require("../models/Account")




router.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const account = await Account.findOne({ email: email });
        res.status(200).json(account)
    }
    catch (err) {
        console.log(err)
    }
})


router.get('/another-route', (req, res) => {
    // router code here
})

module.exports = router