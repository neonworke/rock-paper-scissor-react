const mongoose = require('mongoose');
const userModelSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
},
    { collection: "userModelCollection" }
);

const model = mongoose.model('userModel', userModelSchema);
module.exports = model;