const mongoose = require("mongoose")
const Account = require("../models/Account")
const router = require('express').Router()


router.put('/', async (req, res) => {
    try {
        const replacedAccount = await Account.findOneAndUpdate({ email: req.body.email }, { $set: req.body })
        res.status(200).json(replacedAccount)

    }
    catch (err) {
        console.log(err)
    }
})


router.get('/another-route', (req, res) => {
    // router code here
})

module.exports = router