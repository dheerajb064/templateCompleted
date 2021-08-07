const mongoose = require("mongoose")
const Account = require("../models/Account")
const router = require('express').Router()


router.delete('/', async (req, res) => {
    try {
        const deletedAccount = await Account.deleteOne({ email: req.body.email });
        res.status(200).json(deletedAccount);
    }
    catch (err) {
        console.log(err)
    }
})


router.get('/another-route', (req, res) => {
    // router code here
})

module.exports = router