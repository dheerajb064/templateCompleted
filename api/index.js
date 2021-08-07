const express = require('express')
const app = express()
const port = 8800
const mongoose = require('mongoose')
const createRoute = require('./routes/create')
const viewRoute = require('./routes/view')
const deleteRoute = require('./routes/delete')
const updateRoute = require('./routes/update')
const morgan = require('morgan')


app.use(express.json())
mongoose.connect("mongodb+srv://admin-dheeraj:test123@cluster0.w3bmn.mongodb.net/account?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB connected");
})

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})
app.use(morgan("common"))
app.use("/api/create", createRoute)
app.use("/api/view", viewRoute)
app.use("/api/update", updateRoute)
app.use("/api/delete", deleteRoute)


app.listen(port, () => console.log('> Server is up and running on port : ' + port))