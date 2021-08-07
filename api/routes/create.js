const router = require('express').Router()
const mongoose = require("mongoose")
const Account = require("../models/Account")


router.post('/', async (req, res) => {
    try {
        const account = new Account({
            email: req.body.email,
            firstname: req.body.email,
            lastname: req.body.lastname,
            password: req.body.password,
            phone: req.body.phone,
            companyname: req.body.companyname,
            domain: req.body.domain,
        })
        const newAccount = await account.save()
        res.status(200).json(newAccount)
    }
    catch (err) {
        console.log(err)
    }
})


router.get('/another-route', (req, res) => {
    // router code here
})

module.exports = router