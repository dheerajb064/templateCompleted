const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    email: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    companyname: {
        type: String
    },
    domain: {
        type: String
    }
});
module.exports = mongoose.model("Account", accountSchema);