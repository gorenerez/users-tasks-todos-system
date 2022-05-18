const mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({ 
    Name : String,
    Email : String,
    Street : String,
    City : String,
    Zipcode : Number,
    Tasks : [{ Title : String, Completed : Boolean}],
    Posts : [{ Title : String, Body : String}]
})



module.exports = mongoose.model('users',UsersSchema)